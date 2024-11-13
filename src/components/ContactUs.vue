<template>
    <div class="relative h-screen font-sans">
        <div 
        :style="{backgroundImage: `linear-gradient(rgba(51, 51, 51, 0.6), rgba(51, 51, 51, 0.6)), url(${require('@/assets/Image/Img-contact-us.png')})`}"
        class="absolute inset-0 bg-cover bg-center z-0">
        </div>

        <div class="relative z-10 flex justify-center items-center h-full text-center">
            <div class="title-contact-us text-center text-white">
                <h1>Contact Us</h1>
                <p>We're here to help you with any inquiries or requests. Whether you have a project in mind, need support, or just want to say hello, don't hesitate to reach out to us. Fill out the form below or use the provided contact details, and we'll get back to you as soon as possible. Let's create something amazing together!</p>
            </div>
        </div>

        <div class="information-contact relative flex flex-col mt-10 justify-center items-center text-center">
            <h1>Contact Information</h1>
            <div class="flex justify-between mt-14 mb-14">
                <div class="grid sm:grid-cols-2 gap-x-4 gap-y-4 mr-20 mb-32">
                    <div class="contact-us flex flex-col justify-center items-center text-center shadow-small" v-for="(contact, index) in contactUs" :key="index">
                        <img :src="contact.image" alt="icon contact" class="mb-4"/>
                        <h1>{{ contact.title }}</h1>
                        <p>{{ contact.info }}</p>
                    </div>
                </div>

                <div class="map-container shadow-custom">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.453925368323!2d106.8139987!3d-6.217850199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f154d2ac2361%3A0xa79a4baf72665b91!2sJl.%20Jend.%20Sudirman%20No.45%2C%20RT.14%2FRW.1%2C%20Bend.%20Hilir%2C%20Kecamatan%20Tanah%20Abang%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2010210!5e1!3m2!1sen!2sid!4v1731467045393!5m2!1sen!2sid" width="600" height="450" style="border-radius:20px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
        <FooterWeb/>
    </div>
</template>

<script>
import FooterWeb from './FooterWeb.vue';

export default {
    name: 'ContactUs',
    components :{
        FooterWeb
    },
    data(){
        return {
            contactUs: [
                {
                    image: require("@/assets/Icon/icon-phone.png"),
                    title: "Call Us",
                    info: "+62 21 1234 xxxx"
                },
                {
                    image: require("@/assets/Icon/icon-whatsapp.png"),
                    title: "WhatsApp",
                    info: "+62 21 1234 xxxx"
                },
                {
                    image: require("@/assets/Icon/icon-mail.png"),
                    title: "Email",
                    info: "nextevolve@team.com"
                },
                {
                    image: require("@/assets/Icon/icon-address.png"),
                    title: "Adsress",
                    info: "Jakarta, Indonesia"
                }
            ]
        }
    }
}
</script>

<style scoped>
.title-contact-us{
    padding-left: 127px;
    padding-right: 127px;
    h1{
        font-size: 60px;
        line-height: 74px;
        font-weight: 700;
        margin-bottom: 30px;
    }
    p{
        width: 595px;
        font-size: 18px;
        line-height: 27px;
        font-weight: 400;
    }
}
.map-container{
    padding: 10px;
    border-radius: 20px;
}
.information-contact{
    h1{
        font-size: 24px;
        line-height: 32px;
        font-weight: 600;
        color: #00414D;
    }
}
.contact-us{
    width: 192px;
    height: 153px;
    border-radius: 10px;
    background-color: #FFF2E5;
    h1{
        color: #00414D;
        font-size: 18px;
        line-height: 27px;
        font-weight: 600;
    }
    p{
        color: #00414D;
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
    }
}
</style>