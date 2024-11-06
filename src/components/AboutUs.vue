<template>
    <div class="relative h-screen font-sans">

        <div 
        :style="{backgroundImage: `linear-gradient(rgba(51, 51, 51, 0.6), rgba(51, 51, 51, 0.6)), url(${require('@/assets/Image/Img-about-us.jpg')})`}"
        class="absolute inset-0 bg-cover bg-center z-0">
        </div>

        <!-- About Us -->
        <div class="relative z-10 flex justify-center items-center h-full">
            <div class="title-about-us text-center text-white">
                <h1>About Us</h1>
                <p>We are a creative team dedicated to delivering top-notch digital solutions for your business. With a focus on innovative design, superior quality, and personalized service, we help you succeed in the digital world. From crafting landing pages to managing social media content, we are committed to bringing your vision to life.</p>
            </div>
        </div>

        <!-- Vision & Mission -->
        <div class="vission-mission relative h-full flex flex-col">
        <div class="vision flex justify-between">
            <img src="@/assets/Image/Img-visi.jpg" alt="Image Vision" class="shadow-custom">
            <div class="flex flex-col text-center">
                <h1>Vision</h1>
                <p>
                    To become the primary partner in digital transformation by providing innovative and high-quality design solutions, while fostering sustainable growth for businesses in the digital era.
                </p>
            </div>
        </div>

        <div class="mission flex justify-between">
            <div class="flex flex-col text-center items-center justify-center">
                <h1>Mission</h1>
                <p>
                    To deliver an exceptional customer experience by offering customized solutions, transparency, and reliable support throughout the project journey.
                </p>
            </div>
            <img src="@/assets/Image/Img-misi.jpg" alt="Image Mission" class="shadow-custom">
        </div>
    </div>

    <!-- Our Story -->
    <div class="container-our-story relative h-full mt-14">
        <h1>Our Story</h1>
        <div class="flex justify-between mt-20">
            <div class="flex justify-center text-center items-center w-full">
                <h2>The Beginning</h2>
            </div>
            <div class="flex justify-center text-center items-center w-full">
                <h2>Commitment to Customers</h2>
            </div>
            <div class="flex justify-center text-center items-center w-full">
                <h2>Future and Ambitions</h2>
            </div>
        </div>
        <div class="grid grid-cols-3 divide-x-2">
            <div class="px-10">
                NexEvolve was founded in 2024 by a group of young professionals who shared a common vision. Born from a deep passion for technology and design, our founders, with backgrounds in Computer Science and Creative Design, saw an opportunity to deliver digital solutions that are not only innovative but also of the highest quality.
            </div>
            <div class="px-10">
                We believe that every project is a partnership, and we strive to understand the unique needs of each of our clients. Integrity is a pillar that guides every decision we make, and we continuously strive to deliver the highest quality in every service we offer. We believe that excellent customer service is key to building long-term, strong relationships with each of our clients.
            </div>
            <div class="px-10">
                We plan to expand our services by introducing new technologies and deepening our expertise in design and development. We believe that by continuously evolving and adapting, we will remain relevant and deliver even greater impact in this digital era.    
            </div>
        </div>
    </div>

    <!-- Our Team -->
     <div class="container-our-team mt-14">
        <h1>Our Team</h1>
        <div class="flex justify-center items-center text-center w-full">
            <div class="text-our-team">
                At NexEvolve, our team is the driving force behind our success. Comprising passionate professionals from diverse backgrounds in technology, design, and innovation, we work collaboratively to bring your vision to life.Together, we are dedicated to making a lasting impact in the digital world.
            </div>
        </div>
        <div class="container-profile-team flex justify-between">
            <img src="@/assets/Image/Img-our-team-2.png" alt="our team 1" class="img-profile-team">
            <div class="flex flex-col text-left">
                <h2>Shintya Kim</h2>
                <h3>Frontend Developer</h3>
                <p>Shintya is a Frontend Developer who excels in creating responsive and dynamic user interfaces. With a strong background in HTML, CSS, and JavaScript, he focuses on developing intuitive and user-friendly websites.</p>
                <div class="flex justify-start space-x-2">
                    <img src="@/assets/Icon/Icon-ig.png" alt="Icon Instagram">
                    <img src="@/assets/Icon/Icon-in.png" alt="Icon Linked In">
                </div>
            </div>
        </div>
    </div>
    <div>

    </div>
    </div>
</template>

<script>
export default{
    name: 'AboutUs',
    props: {
        msg: String
    }
}
</script>

<style scoped>
.title-about-us{
    h1{
        font-size: 60px;
        line-height: 74px;
        font-weight: 700;
    }
    p{
        font-size: 18px;
        line-height: 27px;
        width: 610px;
        margin-top: 52px;
        font-weight: 400;
    }
}
.vission-mission{
    margin-top: 44px;
    padding-left: 127px;
    padding-right: 127px;
.vision{
    h1{
        color: #00414D;
        font-size: 24px;
        line-height: 32px;
        font-weight: 600;
    }
    p{
        color: #4D4D4D;
        font-size: 18px;
        font-weight: 400;
        line-height: 27px;
        width: 480px;
        margin-top: 20px;
    }
    img{
        width: 536px;
        height: 324px;
        border-radius: 20px;
    }
}
.mission{
    h1{
        color: #00414D;
        font-size: 24px;
        line-height: 32px;
        font-weight: 600;
    }
    p{
        color: #4D4D4D;
        font-size: 18px;
        font-weight: 400;
        line-height: 27px;
        width: 480px;
        margin-top: 20px;
    }
    img{
        width: 536px;
        height: 324px;
        border-radius: 20px;
    }
}
}
.container-our-story{
    background-color: #E5FBFF;
    padding-top: 80px;
    padding-left: 127px;
    padding-right: 127px;
    h1{
        font-size: 24px;
        line-height: 32px;
        font-weight: 600;
        color: #00414D;
        margin-bottom: 50px;
    }
    .our-story{
        width: 318px;
    }
    h2{
        font-size: 18px;
        line-height: 27px;
        font-weight: 600;
        color: #00414D;
        margin-bottom: 30px;
        
    }
}
.container-our-team{
    padding-left: 127px;
    padding-right: 127px;
    padding-bottom: 100px;
    h1{
        font-size: 24px;
        line-height: 32px;
        font-weight: 600;
        color: #00414D;
        margin-bottom: 20px;
    }
    .text-our-team{
        width: 920px;
        font-size: 18px;
        line-height: 27px;
        font-weight: 400;
    }
    .container-profile-team{
        background-color: #00414D;
        width: 920px;
        height: 370px;
        border-radius: 20px;
        padding: 20px 20px 0px 20px;
        .img-profile-team{
            width: 363px;
            height: auto;
        }
        h2{
            color: #fff;
            font-size: 24px;
            line-height: 32px;
            font-weight: 600;
        }
        h3{
            color: #E6E6E6;
        }
        p{
            color: #CCCCCC;
        }
    }
}
</style>