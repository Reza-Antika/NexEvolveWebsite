<template>
    <div class="relative h-screen font-sans">
        <div class="how-to-order relative flex flex-col justify-center items-center text-center mt-40">
            <h1>How to Order</h1>
            <!-- <div class="line-border border-l-2 w-3"></div> -->
            <div class="mb-14">
            <div class="card-how-to-order flex justify-between" 
            :style="{backgroundColor : (index % 2 === 0) ? '#E5FBFF' : '#E6E6E6'}"
            v-for="(order, index) in howtoOrder" :key="index">
                <div class="img-title-order flex justify-start items-center text-center"
                :style="{ marginTop: index === 0 ? '30px' : '0',  marginBottom: (index === 3) ? '30px' : '0' }">
                    <img :src="order.image" alt="icon how to oder"/>
                    <h2>{{ order.title }}</h2>
                </div>
                <div class="text-how-to-order flex justify-center items-center">{{ order.description }}</div>
            </div>
        </div>

    </div>
    <div>
    <div class="container-faq flex flex-col justify-center items-center">
        <div class="title-faq flex justify-start">
           <h1>FAQ</h1>
        </div>
    </div>
    <div class="flex justify-center items-center">
    <div class="grid grid-cols-1 divide-y mb-14">
        <div class="content-faq" v-for="(faq,index) in contentFAQ" :key="index">
            <div class="faq-item flex justify-between">
                <h5 @click="toggleAnswer(index)" class="cursor-pointer">{{ faq.question }}</h5>
                <button @click="toggleAnswer(index)" class="dropdown">
                    <img :src="faq.dropdown"
                    :class="{'rotate-180': faq.showAnswer}" 
                    class="transition-transform duration-300 cursor-pointer" 
                    alt="expand icon" 
                    width="20"
                    height="20"/>
                </button>
            </div>
            <p v-if="faq.showAnswer" class="faq-answer" v-html="faq.answer"></p>
        </div>
        </div>
    </div>
    </div>

    <div class="flex justify-center items-center">
    <div class="term-conditions flex flex-col text-start mb-14">
        <h4>Terms & Conditions</h4>
        <div class="point-of-term-conditions flex flex-col" v-for="(term, index) in termConditions" :key="index">
            <h6>{{ term.title }}</h6>
            <ul class="list-disc ml-5">
                <li v-for="(point, i) in term.points" :key="i">{{ point }}</li>
            </ul>
        </div>
    </div>
    </div>

    <button class="btn-order">Order Now</button>

    <FooterWeb/>
    </div>
</template>

<script>
import FooterWeb from './FooterWeb.vue';


export default {
    name: 'HowToOrder',
    components : {
        FooterWeb
    },
    data (){
        return {
            howtoOrder : [
                {
                    image : require ("@/assets/Icon/icon-phone.png"),
                    title : "Contact Us",
                    description : "Reach out to us via WhatsApp or email to start the discussion. We're excited to hear about your project and work together to bring your ideas to life. Whether you have a specific vision in mind or need guidance, we're here to support you every step of the way"
                },
                {
                    image : require ("@/assets/Icon/icon-consult.png"),
                    title : "Consult",
                    description : "Discuss your needs and ideas with us, and we’ll provide the best solutions tailored to your vision. Whether you're starting from scratch or looking to enhance an existing project, our team is here to offer expert guidance and ensure your goals are met with creativity and precision."
                },
                {
                    image : require ("@/assets/Icon/icon-order.png"),
                    title : "Order",
                    description : "Confirm your order based on the consultation we've had, and we'll immediately begin turning your ideas into reality. We're dedicated to ensuring that every detail aligns with your vision, providing expert support and tailored solutions throughout the entire process. Let's work together to create something exceptional."
                },
                {
                    image : require ("@/assets/Icon/icon-payment.png"),
                    title : "Payment",
                    description : "Make the payment according to the agreed details, and we will start working on your project immediately. We will provide payment options during the consultation process."
                }
            ],
            
            contentFAQ : [
                {
                    question : "How to Order ?",
                    answer : "1. Contact Us on WhatsApp or Email <br> 2. You can consult with us about the best solution for you<br>3. If you deal with us, you can order <br> 4. You can choose the payment method that we provide, and after the payment is successful, we will process your order.",
                    showAnswer : false,
                    dropdown : require ("@/assets/Icon/icon-dropdown.png")
                },
                {
                    question : "How many options are there for payment?",
                    answer : "1. Contact Us on WhatsApp or Email <br> 2. You can consult with us about the best solution for you<br>3. If you deal with us, you can order <br> 4. You can choose the payment method that we provide, and after the payment is successful, we will process your order.",
                    showAnswer : false,
                    dropdown : require ("@/assets/Icon/icon-dropdown.png")
                }
            ],
            termConditions : [
                {
                    title : "Service Ordering",
                    points : [
                        "All service orders must be made through official communication channels, such as WhatsApp or email.",
                        "Clients must provide clear and complete information regarding their needs and project goals."
                    ]
                },
                {
                    title : "Payment",
                    points : [
                        "Payments must be made according to the details agreed upon during the initial consultation.",
                        "Services will commence only after the initial or full payment is received, as per the agreed terms.",
                        "All payments are non-refundable unless otherwise specified in a written agreement."
                    ]
                },
                {
                    title : "Project Timeline",
                    points : [
                        "The estimated project timeline will be agreed upon at the start of the project. Changes in project scope may affect the completion date.",
                        "Delays in providing materials or approvals from the client may result in project delays."
                    ]
                },
                {
                    title : "Revisions",
                    points : [
                        "Services include a set number of revisions as agreed upon initially. Additional revisions beyond this scope will incur extra charges.",
                        "Revisions do not cover major concept changes that differ from the initial agreement."
                    ]
                },
                {
                    title : "Intellectual Property Right",
                    points : [
                        "Upon full payment, intellectual property rights for the completed work will be transferred to the client, unless otherwise stated.",
                        "The service provider retains the right to use the completed work in their portfolio or for promotional purposes, unless the client requests otherwise in writing."
                    ]
                },
                {
                    title : "Cancellation and Refund",
                    points : [
                        "Service cancellations must be made in writing and may incur cancellation fees, depending on the stage of completion.",
                        "Refunds will only be considered if the project has not started and in accordance with the agreed refund policy."
                    ]
                },
                {
                    title : "Confidentiality",
                    points : [
                        "All information provided by the client will be kept confidential and will not be shared with third parties without the client’s written consent."
                    ]
                },
                {
                    title : "Liability",
                    points : [
                        "The service provider is not liable for any loss or damage resulting from the use of the completed work by the client.",
                        "The client is responsible for the content they provide, including copyright and legal compliance."
                    ]
                },
                {
                    title : "Dispute Resolution",
                    points : [
                        "Any disputes arising from these services will be resolved through negotiation. If an agreement cannot be reached, disputes will be resolved in accordance with applicable laws."
                    ]
                },
                {
                    title : "Changes to Terms and Conditions",
                    points : [
                        "The service provider reserves the right to change these terms and conditions at any time without prior notice. Changes will apply to all ongoing projects."
                    ]
                }
            ]
        }
    },
    methods: {
        toggleAnswer(index){
            this.contentFAQ[index].showAnswer = !this.contentFAQ[index].showAnswer;
        }
    }
}
</script>

<style>
.how-to-order{
    h1{
    font-size: 60px;
    line-height: 74px;
    font-weight: 700;
    color: #00414D;
    margin-bottom: 57px;
    }
    
}
.card-how-to-order{
    width: 1000px;
    border-radius: 20px;
    height: 172px;
    padding: 0px 60px 0px 60px;
    .img-title-order {
        width: 200px;
        height: auto;
        margin-top: 30px;
        border-right: 1px solid #00414D;
    }
    h2{
        font-size: 18px;
        line-height: 27px;
        font-weight: 600;
        margin-left: 10px;
    }
    .line-border{
        border-color: #00414D;
        height: 562px;
        margin-top: 40px;
    }
    .text-how-to-order {
        width: 595px;
        text-align: justify;
    }
}
.container-faq{
    padding-left: 127px;
    padding-right: 127px;
    .title-faq{
        padding-left: 60px;
        background-color: #E6E6E6;
        width: 1000px;
        height: 91px;
        padding-top: 5px;
        h1{
            font-size: 60px;
            line-height: 74px;
            font-weight: 700;
            color: #00414D;
        }
    }
}
.content-faq{
    background-color: #E5FBFF;
    width: 1000px;
    height: auto;
    padding: 20px 60px 20px 60px;
    h5{
        font-size: 18px;
        line-height: 27px;
        font-weight: 600;
        color: #00414D;
    }
    .faq-answer{
        width: 864px;
        text-align: justify;
        margin-top: 20px;
        color: #4D4D4D;
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
    }
}
.term-conditions {
    width: 1000px;
    h4{
        color: #B25600;
        font-size: 18px;
        line-height: 27px;
        font-weight: 600;
        margin-bottom: 10px;
    }
    h6{
        color: #4D4D4D;
        font-size: 16px;
        line-height: 24px;
        font-weight: 600;
        margin-bottom: 2px;
        margin-top: 4px;
    }
    ul{
        li{
            font-size: 14px;
            line-height: 21px;
            font-weight: 400;
            color: #4D4D4D;
        }
    }
}
.btn-order{
    width: 248px;
    height: 50px;
    background-color: #006C80;
    color: #ffff;
    font-size: 18px;
    line-height: 23px;
    font-weight: 500;
    border-radius: 10px;
    margin-bottom: 50px;
}
</style>