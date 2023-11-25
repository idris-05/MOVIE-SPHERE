const footerContent = 
`
<div class="content">
<div class="top">
    <div class="logo-details">
        <i class="fab fa-slack"></i>
        <span class="logo_name">CodingLab</span>
    </div>
    <div class="media-icons">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-github"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-linkedin-in"></i></a>
    </div>
</div>
<div class="link-boxes">
    <ul class="box">
        <li class="link_name">Company</li>
        <li><a href="#">Home</a></li>
        <li><a href="#">Contact us</a></li>
        <li><a href="#">About us</a></li>
        <li><a href="#">Get started</a></li>
    </ul>
    <ul class="box">
        <li class="link_name">Services</li>
        <li><a href="#">App design</a></li>
        <li><a href="#">Web design</a></li>
        <li><a href="#">Logo design</a></li>
        <li><a href="#">Banner design</a></li>
    </ul>
    <ul class="box">
        <li class="link_name">Account</li>
        <li><a href="#">Profile</a></li>
        <li><a href="#">My account</a></li>
        <li><a href="#">Prefrences</a></li>
        <li><a href="#">Purchase</a></li>
    </ul>
    <ul class="box">
        <li class="link_name">Courses</li>
        <li><a href="#">HTML & CSS</a></li>
        <li><a href="#">JavaScript</a></li>
        <li><a href="#">Photography</a></li>
        <li><a href="#">Photoshop</a></li>
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
    <span class="copyright_text">Copyright © 2021 <a href="#">CodingLab.</a>All rights reserved</span>
    <span class="policy_terms">
        <a href="#">Privacy policy</a>
        <a href="#">Terms & condition</a>
    </span>
</div>
</div>
`

const myFooterElement = document.getElementById("footer-ftr")
myFooterElement.innerHTML = footerContent 
