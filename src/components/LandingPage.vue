<template>
  <div class="relative h-screen font-sans">
    <!-- Layer Background -->
    <div 
      :style="{ backgroundImage: `url(${require('@/assets/Image/working-team.png')})` }" 
      class="absolute inset-0 bg-cover bg-center opacity-50 z-0">
    </div>

    <!-- Home-->
    <div class="relative z-10">

      <div class="title-home absolute flex flex-col justify-start">
        <h1>Transform Your Ideas 
          into a Stunning Digital Presence</h1>
        <p>We offer comprehensive solutions for your digital needs, from creating responsive landing pages and captivating UI/UX designs to crafting creative Canva templates and managing social media content. Get tailored services that align with your vision and brand, helping your business thrive in the digital age.</p>
        <button class="btn-home">Get Started</button>
      </div>


      <!-- Polygon Image Home -->
      <div class="relative flex justify-center">
        <img src="@/assets/Image/Polygon 1.png" alt="Polygon" class="mt-[-10px]">
      </div>
    </div>

   <!-- About Us-->
<div class="about-us absolute inset-0 z-20">
  <div class="bg-white w-full h-screen">
    <!-- Judul Section -->
    <h1 class="text-about-us font-semibold text-center">About Us</h1>
    <div class="content-about-us flex justify-start">
      <img src="@/assets/Image/Aboutus photo.png" alt="Photo About Us">
      <div class="flex flex-col">
        <h1>Committed to Quality and Innovation</h1>
        <p>We are a creative team dedicated to delivering top-notch digital solutions for your business. With a focus on innovative design, superior quality, and personalized service, we help you succeed in the digital world. From crafting landing pages to managing social media content, we are committed to bringing your vision to life.</p>
        <button class="btn-about-us">View More</button>
      </div>
      
    </div>
  </div>

  <!-- Our Service -->
  <div class="bg-white w-full h-screen">
    <div class="content-our-service w-full h-screen">
      <h1 class="text-our-service font-semibold text-center">Our Service</h1>
      <div class="grid grid-cols-2 gap-y-0 items-center justify-items-center">
        <div class="card-our-service flex flex-col justify-center mr-[-150px] shadow-custom">
          <h2>Website Landing Page</h2>
          <div class="flex justify-between">
            <p>We create attractive and responsive landing pages designed to maximize conversions and provide an optimal user experience. With intuit...</p>
            <img src="@/assets/Image/Img-landingpage.jpg" alt="Image Landing Page" class="rounded-full">
          </div>
          <div class="flex justify-between">
            <button class="btn-our-service">Order Now</button>
            <div class="btn_view_more_icon flex items-center justify-center">
              <button>View More</button>
              <img src="@/assets/Icon/Arrow_alt_lright.svg" alt="Icon arrrow right">
            </div>
          </div>
        </div>
        
        <div class="card-our-service flex flex-col justify-center ml-[-150px] shadow-custom">
          <h2>UI/UX Design</h2>
          <div class="flex justify-between">
            <p>Our UI/UX design services focus on creating intuitive user interfaces and enjoyable experiences. With a user-centered approach, w...</p>
            <img src="@/assets/Image/Img-UIUX.jpg" alt="Image Landing Page" class="rounded-full">
          </div>
          <div class="flex justify-between">
            <button class="btn-our-service">Order Now</button>
            <div class="btn_view_more_icon flex items-center justify-center">
              <button>View More</button>
              <img src="@/assets/Icon/Arrow_alt_lright.svg" alt="Icon arrrow right">
            </div>
          </div>
        </div>

        <div class="card-our-service flex flex-col justify-center mr-[-150px] shadow-custom">
          <h2>Canva Templates</h2>
          <div class="flex justify-between">
            <p>Access ready-to-use Canva templates, specifically designed to help you create visually appealing and consistent content effortlessly...</p>
            <img src="@/assets/Image/Social Media Template.png" alt="Image Landing Page" class="rounded-full">
          </div>
          <div class="flex justify-between">
            <button class="btn-our-service">Order Now</button>
            <div class="btn_view_more_icon flex items-center justify-center">
              <button>View More</button>
              <img src="@/assets/Icon/Arrow_alt_lright.svg" alt="Icon arrrow right">
            </div>
          </div>
        </div>

        <div class="card-our-service flex flex-col justify-center ml-[-150px] shadow-custom">
          <h2>Social Media Management</h2>
          <div class="flex justify-between">
            <p>We offer comprehensive social media management services, covering everything from content planning to publishing and performanc...</p>
            <img src="@/assets/Image/Img-sosmed.jpg" alt="Image Landing Page" class="rounded-full">
          </div>
          <div class="flex justify-between">
            <button class="btn-our-service">Order Now</button>
            <div class="btn_view_more_icon flex items-center justify-center">
              <button>View More</button>
              <img src="@/assets/Icon/Arrow_alt_lright.svg" alt="Icon arrrow right">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- How to Order -->
  <div class="how-to-order flex justify-between bg-white h-screen">
  <div class="flex flex-col">
    <h1 class="font-semibold">How to Order</h1>
    <p>Follow these simple steps to order our services. From consultation to payment, we are here to help you bring your project to life smoothly and efficiently. </p>
    <div class="flex justify-start">
      <div class="flex flex-col items-center">
        <div class="item-rounded"></div>
        <div class="line-rounded border-l-2 h-16 w-3"></div>
      </div>
      <div class="flex flex-col">
        <h2>Contact Us</h2>
        <p class="text-order">Reach out to us via WhatsApp or email to start the discussion.</p>
      </div>
    </div>

    <div class="flex justify-start mt-[-10px]">
      <div class="flex flex-col items-center">
        <div class="item-rounded"></div>
        <div class="line-rounded border-l-2 h-16 w-3"></div>
      </div>
      <div class="flex flex-col">
        <h2>Consult</h2>
        <p class="text-order">Discuss your needs and ideas, and we’ll provide the best solutions.</p>
      </div>
    </div>

    <div class="flex justify-start mt-[-10px]">
      <div class="flex flex-col items-center">
        <div class="item-rounded"></div>
        <div class="line-rounded border-l-2 h-16 w-3"></div>
      </div>
      <div class="flex flex-col">
        <h2>Order</h2>
        <p class="text-order">Confirm your order based on the consultation we've had.</p>
      </div>
    </div>

    <div class="flex justify-start mt-[-10px]">
        <div class="item-rounded"></div>
      <div class="flex flex-col">
        <h2>Payment</h2>
        <p class="text-order">Make the payment as per the agreed details, and we’ll begin working on your project.</p>
      </div>
    </div>

    <div class="flex justify-start space-x-4">
      <button class="btn-view-how-order">View More</button>
      <button class="btn-order-how-order">Order Now</button>
    </div>
  </div>
  <img src="@/assets/Image/working-team.png" alt="Image how to order" class="shadow-custom">
  </div>

  <!-- Footer -->
<footer class="footer-content w-full">
  <div class="flex justify-between">
      <div class="flex flex-col">
        <div class="logo-company flex">
          <img src="@/assets/Image/Logo.png" alt="Logo footer">
          <h1 class="company-name">NexEvolve</h1>
        </div>
        <p>NexEvolve is your trusted partner in digital transformation, offering innovative design and development solutions tailored to elevate your business.</p>
      </div>
      <div class="flex justify-end">
       <div class="card-contact flex flex-col">
        <h1>Our Service</h1>
        <p>Landing Page</p>
        <p>UI/UX Design</p>
        <p>Canva Templates</p>
        <p>Social Media Management</p>
      </div>

      <div class="card-contact flex flex-col">
        <h1>About US</h1>
        <p>About</p>
        <p>Vision Mission</p>
        <p>Our Story</p>
        <p>Our Team</p>
      </div>

      <div class="card-contact flex flex-col">
        <h1>Address</h1>
        <p>Jl. Sudirman No. 45, Jakarta Pusat, DKI Jakarta, 10210, Indonesia
          <br><br>+62 21 1234 xxxx
          <br>nextevolve@team.com</p>
      </div>
      </div>
   </div>

   <div class="flex justify-center space-x-1 items-center mt-[100px]">
    <img src="@/assets/Icon/Icon_rounded_fb.svg" alt="Social media company">
    <img src="@/assets/Icon/Icon_rounded_ig.svg" alt="Social media company">
    <img src="@/assets/Icon/Icon_rounded_lnk.svg" alt="Social media company">
   </div>
   <div class="copyright flex justify-center">
    <p>Copyright &copy; 2024 NexEvolve</p>
   </div>

  </footer>
</div>
</div>
 
</template>


<script>
// import NavbarMenu from './NavbarMenu.vue';

export default {
  name: 'LandingPage',
  // components : {
  //   NavbarMenu
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.about-us{
  margin-top: 650px;
  .text-about-us{
    font-size: 24px;
    color: #002B33;
    line-height: 32px;
    padding-top: 60px;
    margin-bottom: 40px;
  }
  .content-about-us{
    margin-left: 100px;
    margin-right: 127px;
  img{
    width: 533px;
    height: 433px;
    margin-right: 40px;
  }
  h1{
    font-size: 48px;
    font-weight: 700;
    line-height: 64px;
    text-align: left;
    width: 533px;
    color: #002B33;
    margin-top: 20px;
  }
  p{
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    text-align: justify;
    color: #4D4D4D;
    margin-top: 20px;
    width: 533px;
  }
  .btn-about-us{
    text-align: center;
    color: #006C80;
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    background-color: transparent;
    border: 2px solid #006C80;
    width: 120px;
    height: 42px;
    border-radius: 3px;
    margin-top: 30px;
  }
  }
}
.title-home{
  margin-left: 127px;
  margin-top: 200px;
  z-index: 10;
  text-align: left;
  width: 520px;
  h1{
    color: #fff;
    font-size: 48px;
    font-weight: 700;
    line-height: 64px;
  }
  p{
    color: #ccc;
    margin-top: 20px;
    text-align: justify;
    font-size: 18px;
    line-height: 27px;
    font-weight: 400;
  }
  .btn-home{
    color: #fff;
    margin-top: 30px;
    width: 120px;
    height: 42px;
    background-color: #E56E00;
    border-radius: 3px;
    font-weight: 500;
  }
}
.content-our-service{
  background-color: #E5FBFF;
  padding-top: 25px;
  padding-left: 127px;
  padding-right: 127px;
  .text-our-service{
    font-size: 24px;
    line-height: 32px;
    color: #002B33;
    margin-bottom: 30px;
  }
 .card-our-service{
  background-color: #002B33;
  opacity: 80%;
  border-radius: 10px;
  width: 361px;
  height: 265px;
  padding: 15px 15px 10px 15px;
  margin-bottom: 10px;
  h2{
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    color: #fff;
    text-align: left;
    margin-bottom: 15px;
  }
  p{
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: #E6E6E6;
    text-align: justify;
    width: 170px;
    height: 130px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
  img{
    width: 145px;
    height: 145px;
    margin-bottom: 10px;
    margin-top: -10px;
  }
  .btn-our-service{
    color: #fff;
    font-size: 12px;
    line-height: 14px;
    font-weight: 500;
    background-color: #E56E00;
    border-radius: 5px;
    text-align: center;
    width: 80px;
    height: 30px;
    margin-top: 5px;
  }
  .btn_view_more_icon{
    color: #fff;
    font-size: 12px;
    line-height: 14px;
    padding-right: 10px;
    font-weight: 400;
    img{
    width: 15px;
    height: 15px;
    margin-left: 5px;
    margin-top: 12px;
    }
  }
 }
}
.how-to-order{
  text-align: left;
  margin-top: 40px;
  margin-left: 127px;
  margin-right: 127px;
  padding-bottom: 40px;
  h1{
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 20px;
  }
  p{
    width: 439px;
    margin-bottom: 25px;
    text-align: justify;
    color: #4D4D4D;
    font-size: 18px;
    line-height: 27px;
    font-weight: 400;
  }
  img{
    width: 550px;
    height: 450px;
    border-radius: 10px;
    margin-top: 60px;
  }
  .btn-view-how-order{
    background-color: #006C80;
    padding: 10px 25px 10px 25px;
    color: #fff;
    border-radius: 5px;
    font-size: 14px;
    line-height: 17px;
    font-weight: 500;
    margin-top: 40px;
  }
  .btn-order-how-order{
    background-color: transparent;
    border: 2px solid #E56E00;
    padding: 10px 25px 10px 25px;
    color: #E56E00;
    border-radius: 5px;
    font-size: 14px;
    line-height: 17px;
    font-weight: 500;
    margin-top: 40px;
  }
  h2{
    font-size: 18px;
    font-weight: 600;
    line-height: 27px;
    color: #00414D;
  }
  .item-rounded{
    background-color: #006C80;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    margin-right: 10px;
    margin-top: 2px;
  }
  .line-rounded{
    border-color: #E56E00;
  }
  .text-order{
    width: 439px;
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;
    color: #4D4D4D;
  }
}
.footer-content{
  background: #00414D;
  opacity: 80%;
  padding-left: 127px;
  padding-right: 127px;
  padding-top: 50px;
  padding-bottom: 30px;
  img{
    width: 50px;
    height: 50px;
    margin-right: 5px;
    border-radius: 100%;
  }
  .company-name{
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    color: #fff;
    margin-top: 15px;
  }
  p{
    width: 248px;
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;
    color: #E6E6E6;
    text-align: justify;
    margin-top: 20px;
  }
  .card-contact{
    width: 200px;
    h1{
    color: #fff;
    font-weight: 500;
    margin-top: 15px;
    text-align: left;
  }
    p{
      width: 200px;
      font-size: 14px;
      line-height: 21px;
      font-weight: 400;
      color: #E6E6E6;
      text-align: justify;
      margin-top: 20px;
    }
  }
  .copyright{
    margin-left: 70px;
    text-align: center;
    font-size: 12px;
    margin-top: -5px;
  }
  
}
</style>
