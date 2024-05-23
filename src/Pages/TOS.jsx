import styles from "../style";
import { Navbar, TextSlider, Footer, Ourfounder, Team } from '../components';

const TOS = () => (
    <div className="bg-[url('./assets/bgimg.png')] bg-cover p-0">
        <div className="w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <Navbar />
            </div>

            <div className={` ${styles.paddingY} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <section className={`${styles.flexStart} sm:mb-6 sm:mt-[80px] my-6 sm:px-16 px-1 sm:py-20 py-4  sm:flex-row flex-col bg-[#D9D9D9] rounded-[100px] box-shadow lg:mx-40 group`}>
                        <div className="flex-1 flex flex-col text-black  ">
                            <h2 className={`font-outfit font-semibold xs:text-[48px] text-[24px] text-[#161616] xs:leading-[76.8px] leading-[66.8px] w-full text-center group-hover:scale-[1.03] ease-in-out duration-300 group-hover:text-[#2632A1]`}>Terms & Services</h2>
                            <p className={`font-outfit font-semibold sm:text-[24px] text-[18px] leading-[30.8px] mt-5 lg:mx-20 md:mx-20 mx-12 p-8 group-hover:scale-[1.01] ease-in-out duration-300 group-hover:text-[#000080]`}>
                                <strong>Terms of Service</strong>

                                <p className="mt-10">Welcome to A Business Studio! These Terms of Service outline the rules and regulations for the use of our website and services. By accessing this website and using our services, you accept these terms and conditions in full. Do not continue to use A Business Studio's website if you do not accept all of the terms and conditions stated on this page.</p>

                                <ol className="mt-10 list-decimal list-inside">
                                    <li className="mt-10"><strong>Introduction</strong><br />
                                        A Business Studio ("us," "we," or "our") is committed to protecting the privacy of our users ("you" or "your"). This Privacy Policy describes how we collect, use, and disclose information about you when you use our website or services.</li>

                                    <li className="mt-10"><strong>Information We Collect</strong><br />
                                        We collect information you provide to us when you use our website or services, such as your name, email address, phone number, and payment information. We also collect information about your use of our website and services, including your IP address, browser type, and pages you visit.</li>

                                    <li className="mt-10"><strong>Use of Information</strong><br />
                                        The information we collect is used to provide and improve our services, process payments, communicate with you, and comply with legal obligations. Additionally, we may use your information to personalize your experience with our services and provide you with targeted advertising.</li>

                                    <li className="mt-10"><strong>Disclosure of Information</strong><br />
                                        We may disclose your information to third-party service providers who assist us in providing our services, such as payment processors and customer support providers. Your information may also be disclosed to law enforcement or other government agencies if required by law or to protect our rights or the rights of others.</li>

                                    <li className="mt-10"><strong>Cookies and Similar Technologies</strong><br />
                                        We utilize cookies and similar technologies to collect information about your use of our website and services. You can control cookies through your browser settings.</li>

                                    <li className="mt-10"><strong>Data Security</strong><br />
                                        While we take reasonable measures to protect your information from unauthorized access, disclosure, or destruction, please be aware that no method of transmission over the internet or electronic storage is completely secure. We cannot guarantee the absolute security of your information.</li>

                                    <li className="mt-10"><strong>Data Retention</strong><br />
                                        We retain your information for as long as necessary to provide our services and as required by law. Additionally, we may retain your information for a longer period if necessary to resolve disputes or protect our legal rights.</li>

                                    <li className="mt-10"><strong>Your Rights</strong><br />
                                        You have the right to access, update, and delete your personal information. You can also object to or restrict our use of your information or request that we provide your information in a portable format.</li>

                                    <li className="mt-10"><strong>Changes to Privacy Policy</strong><br />
                                        We reserve the right to update or modify this Privacy Policy at any time, without notice or liability. Your continued use of our website or services after any such changes constitutes your acceptance of the new Privacy Policy.</li>

                                    <li className="mt-10"><strong>Contact Us</strong><br />
                                        If you have any questions or concerns about this Privacy Policy, please contact us at the given number IN +91 9535572995.</li>
                                </ol>

                                <p className="mt-10">By using our website and services, you agree to abide by these Terms of Service. If you do not agree with any part of these terms, please do not use our website or services. Thank you for choosing A Business Studio!</p>
                            </p>


                        </div>
                    </section>
                    <div className="lg:mt-32">
                        <TextSlider />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </div>
);

export default TOS;
