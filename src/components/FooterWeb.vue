<template>
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
</template>

<script>
    export default {
        name: 'FooterWeb',
    }
</script>

<style>
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