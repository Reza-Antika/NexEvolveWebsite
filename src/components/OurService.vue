<template>
    <div class="relative h-screen font-sans">
        <div class="container-our-service flex justify-bewteen">
            <div class="menu-our-service flex flex-col pt-56">
                <button 
                    class="btn-our-service" 
                    :class="{ 'active': selectedService === pageService.landingPage, 'inactive': selectedService !== pageService.landingPage }" 
                    @click="showService('landingPage')"
                >
                    Landing Page
                </button>
                <button 
                    class="btn-our-service" 
                    :class="{ 'active': selectedService === pageService.uiux, 'inactive' : selectedService !== pageService.uiux }" 
                    @click="showService('uiux')"
                >
                    UI/UX Design
                </button>
                <button 
                    class="btn-our-service" 
                    :class="{ 'active': selectedService === pageService.canva, 'inactive' : selectedService !== pageService.canva }" 
                    @click="showService('canva')"
                >
                    Canva Design
                </button>
                <button 
                    class="btn-our-service" 
                    :class="{ 'active': selectedService === pageService.socialMedia, 'inactive' : selectedService !== pageService.socialMedia }" 
                    @click="showService('socialMedia')"
                >
                    Social Media Management
                </button>
            </div>

            <div class="text-our-service pt-32" v-if="selectedService">
                <div class="flex flex-col">
                    <h1>{{ selectedService.title }}</h1>
                    <p v-html="selectedService.description"></p>
                    <h4>Price start - {{ selectedService.price }}</h4>
                    <button>Order Now</button>
                </div>
            </div>
        </div>
        <FooterWeb/>
    </div>
</template>

<script>
import FooterWeb from './FooterWeb.vue';

export default {
    name : 'OurService',
    components : {
        FooterWeb,
    },
    data(){
        return {
            selectedService : null,
            pageService : {
                landingPage :{
                    title: 'Landing Page',
                    description: 'We create attractive and responsive landing pages designed to maximize conversions and provide an optimal user experience. With intuitive design and strategic content placement, our landing pages are crafted to capture attention and drive engagement. From initial concept to final implementation, we ensure that each element is tailored to meet your specific goals, whether you are launching a new product, capturing leads, or promoting special offers. Our approach combines aesthetics with functionality to deliver a seamless experience for your audience. <br><br> This service includes the creation of responsive and visually appealing landing pages. Prices start at Rp2,000,000 for a landing page with 1-3 pages. Additional pages are available at an extra cost of Rp500,000 per page. We ensure that each page is designed to make a strong impact on your audience.',
                    price: 'Rp2.000.000'
                },
                uiux : {
                    title: 'UI/UX Design',
                    description: 'Our UI/UX design services focus on creating intuitive user interfaces and enjoyable experiences. With a user-centered approach, we prioritize understanding your target audiences needs and behaviors to design interfaces that are both visually appealing and highly functional. We work collaboratively with you to ensure that every design element enhances usability and meets your project objectives. Our goal is to provide seamless, engaging interactions that improve user satisfaction and drive meaningful results. <br><br> Our UI/UX Design service focuses on creating intuitive and engaging digital experiences. The basic package includes design for 3-5 pages, starting at Rp5,000,000. Additional pages are available at an extra cost of Rp1,500,000 per page. We work closely with you to create an optimal user experience at every stage of the project.',
                    price: 'Rp1.500.000'
                },
                canva : {
                    title: 'Canva Design',
                    description: 'Access ready-to-use Canva templates, specifically designed to help you create visually appealing and consistent content effortlessly. Our custom templates are tailored to reflect your brands identity and ensure a cohesive look across all your materials. Whether you need templates for social media posts, presentations, or marketing materials, our designs are easy to edit and adapt to your needs. Save time and maintain a professional appearance with templates that streamline your content creation process. <br><br> Our Canva Template Design service offers custom-designed templates for various needs. Prices start at Rp100,000 for 5 templates. Additional templates can be added at a cost of Rp20,000 per template. Our templates help you maintain consistent visual branding across all platforms.',
                    price: 'Rp20.000'
                },
                socialMedia : {
                    title: 'Social Media Management',
                    description: 'We offer comprehensive social media management services, covering everything from content planning to publishing and performance tracking. Our team handles the creation and scheduling of engaging posts, manages interactions with your audience, and analyzes performance metrics to optimize your social media strategy. By leveraging the latest trends and best practices, we ensure that your social media presence is active, relevant, and aligned with your brands goals. Let us manage your social media channels so you can focus on growing your business. <br><br>Our Social Media Management service provides efficient content and interaction management for your social media accounts. The basic package includes management for 3-5 posts per week, starting at Rp4,000,000 per month. If you need more posts or additional services like paid advertising, we offer customizable options to suit your needs.',
                    price: 'Rp4.000.000'
                }
            }
        }
    },
    created() {
        this.selectedService = this.pageService.landingPage;
    },
    methods: {
        showService(service) {
            this.selectedService = this.pageService[service];
        }
    }
}
</script>

<style scoped>
.container-our-service{
    padding-right: 127px;
}
.menu-our-service {
    background-color: #002B33;
    width: 415px;
    height: 732px;
    padding-left: 127px;
    padding-right: 50px;
    margin-right: 52px;
    opacity: 80%;
}
.btn-our-service{
    width: 248px;
    height: 50px;
    border-radius: 10px;
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 23px;
    font-weight: 500;
}
.active {
    background-color: #E56E00; 
    color: white;
}
.inactive {
    background-color: white;
    color: #E56E00;
}
.text-our-service {
    h1{
        font-size: 48px;
        line-height: 64px;
        font-weight: 700;
        color: #00414D;
        margin-bottom: 27px;
        text-align: left;
    }
    p{
        text-align: justify;
        font-size: 18px;
        line-height: 27px;
        font-weight: 400;
        color: #4D4D4D;
        margin-bottom: 60px;
    }
    h4{
        text-align: left;
        font-size: 18px;
        line-height: 27px;
        font-weight: 500;
        color: #333333;
        margin-bottom: 10px;
    }
    button{
        align-items: start;
        text-align: center;
        width: 120px;
        height: 42px;
        background-color: #006C80;
        border-radius: 5px;
        color: #fff;
        font-size: 16px;
        line-height: 20px;
        font-weight: 500;
    }
}
</style>