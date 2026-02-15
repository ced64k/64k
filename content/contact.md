---
layout: layouts/base.njk
title: Contact
permalink: /contact/
---

<h1>Contact</h1>

<div class="wrapper flow">
  <p>N'hésitez pas à me contacter pour toute question ou suggestion.</p>
  
  <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
    <p class="hidden">
      <label>
        Ne remplissez pas ce champ si vous êtes humain: <input name="bot-field" />
      </label>
    </p>
    
    <p>
      <label for="name">Nom</label>
      <input type="text" id="name" name="name" required />
    </p>
    
    <p>
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required />
    </p>
    
    <p>
      <label for="message">Message</label>
      <textarea id="message" name="message" rows="6" required></textarea>
    </p>
    
    <p>
      <button type="submit">Envoyer</button>
    </p>
  </form>
</div>
