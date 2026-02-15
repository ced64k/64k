# Script to convert HTML img tags to Markdown syntax
# Processes all .md files in content/blog

function Extract-ImgAttributes {
    param($imgTag)
    
    # Extract src
    $src = ""
    if ($imgTag -match 'src="([^"]*)"') {
        $src = $Matches[1]
    }
    
    # Extract title or alt (prefer title)
    $alt = ""
    if ($imgTag -match 'title="([^"]*)"') {
        $alt = $Matches[1]
    } elseif ($imgTag -match 'alt="([^"]*)"') {
        $alt = $Matches[1]
    }
    
    return @{ Src = $src; Alt = $alt }
}

$files = Get-ChildItem -Path "content/blog" -Filter "*.md" -Recurse
$totalConverted = 0
$filesModified = 0

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    $originalContent = $content
    $conversions = 0
    
    # Pattern 1: <a href="..."><img ... /></a>
    $matches = [regex]::Matches($content, '<a[^>]*?href="([^"]*?)"[^>]*?>(<img[^>]*?>)</a>')
    foreach ($match in $matches | Sort-Object -Property Index -Descending) {
        $href = $match.Groups[1].Value
        $imgTag = $match.Groups[2].Value
        $attrs = Extract-ImgAttributes -imgTag $imgTag
        
        $newTag = "[![$($attrs.Alt)]($($attrs.Src))]($href)"
        $content = $content.Remove($match.Index, $match.Length).Insert($match.Index, $newTag)
        $conversions++
    }
    
    # Pattern 2: [<img ... />](url)
    $matches = [regex]::Matches($content, '\[(<img[^>]*?>)\]\(([^)]+)\)')
    foreach ($match in $matches | Sort-Object -Property Index -Descending) {
        $imgTag = $match.Groups[1].Value
        $href = $match.Groups[2].Value
        $attrs = Extract-ImgAttributes -imgTag $imgTag
        
        $newTag = "[![$($attrs.Alt)]($($attrs.Src))]($href)"
        $content = $content.Remove($match.Index, $match.Length).Insert($match.Index, $newTag)
        $conversions++
    }
    
    # Pattern 3: Standalone <img ... />
    $matches = [regex]::Matches($content, '<img[^>]*?>')
    foreach ($match in $matches | Sort-Object -Property Index -Descending) {
        $imgTag = $match.Value
        $attrs = Extract-ImgAttributes -imgTag $imgTag
        
        $newTag = "![$($attrs.Alt)]($($attrs.Src))"
        $content = $content.Remove($match.Index, $match.Length).Insert($match.Index, $newTag)
        $conversions++
    }
    
    if ($content -ne $originalContent) {
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8 -NoNewline
        $filesModified++
        $totalConverted += $conversions
        Write-Host "$($file.Name): $conversions images converted" -ForegroundColor Green
    }
}

Write-Host "`nSummary:" -ForegroundColor Cyan
Write-Host "Files modified: $filesModified" -ForegroundColor Cyan
Write-Host "Total images converted: $totalConverted" -ForegroundColor Cyan
