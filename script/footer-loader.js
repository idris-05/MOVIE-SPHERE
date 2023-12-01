const footerContent =
  `
<div class="content">
  <div class="top">
    <div class="logo-details">
      <i class="fab fa-slack"></i>
      <span class="logo_name">MOVIE SPHERE</span>
    </div>
    <div class="media-icons">
      <a href="javascript:void(0);"><i class="fab fa-facebook-f"></i></a>
      <a href="javascript:void(0);"><i class="fab fa-github"></i></a>
      <a href="javascript:void(0);"><i class="fab fa-instagram"></i></a>
      <a href="javascript:void(0);"><i class="fab fa-linkedin-in"></i></a>
    </div>
  </div>
  <div class="link-boxes">
    <ul class="box">
      <li class="link_name">Discover</li>
      <li><a href="javascript:void(0);">Home</a></li>
      <li><a href="javascript:void(0);">About us</a></li>
      <li><a href="javascript:void(0);">More information</a></li>
    </ul>
    <ul class="box">
      <li class="link_name">Community</li>
      <li><a href="javascript:void(0);">My Profile</a></li>
      <li><a href="javascript:void(0);">User Spotlights</a></li>
      <li><a href="javascript:void(0);">Join Our Community</a></li>
    </ul>
    <ul class="box">
      <li class="link_name">Watching</li>
      <li><a href="javascript:void(0);">Watch list</a></li>
      <li><a href="javascript:void(0);">Watch history</a></li>
      <li><a href="javascript:void(0);">Continue Watching</a></li>

    </ul>
    <ul class="box">
      <li class="link_name">Platform Access</li>
      <li><a href="javascript:void(0);">Settings</a></li>
      <li><a href="javascript:void(0);">Download on App Store</a></li>
      <li><a href="javascript:void(0);">Get it on Google Play</a></li>
    </ul>
    <ul class="box input-box">
      <li class="link_name">Contact us</li>
      <form id="emailForm">
        <label for="userEmail">Enter your email:</label>
        <input type="email" id="userEmail" placeholder="Your email" required>

        <label for="userMessage">Type your message:</label>
        <textarea id="userMessage" placeholder="Your message" rows="4" required></textarea>

        <button class="btn" type="submit">Send</button>
      </form>
    </ul>
  </div>
</div>
<div class="bottom-details">
  <div class="bottom_text">
    <span class="policy_terms">
      <a href="javascript:void(0);">FAQ</a>
      <a href="javascript:void(0);">Help Center</a>
      <a href="javascript:void(0);">Privacy policy</a>
      <a href="javascript:void(0);">Terms & condition</a>
    </span>
    <span class="copyright_text">Copyright © 2023 <a href="/main.html">MOVIESPHERE</a>All rights reserved</span>
  </div>
</div>

`

document.addEventListener("DOMContentLoaded", () => {
  const myFooterElement = document.getElementById("footer-ftr")
  myFooterElement.innerHTML = footerContent
})

