'use client'

import { Card } from '@/components/ui/Card'

export default function TermsAndConditions() {
    return (
        <div className="container mx-auto px-4 py-12">
            <section className="max-w-4xl mx-auto animate-fade-in">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-text-primary">
                        Terms & Conditions
                    </h1>
                    <p className="text-xl text-text-secondary leading-relaxed">
                        Please read these terms carefully before using our services.
                    </p>
                </div>

                <Card elevation={2} className="p-8 mb-8 animate-slide-up">
                    <div className="space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold mb-3 text-text-primary">1. Acceptance of Terms</h2>
                            <p className="text-text-secondary leading-relaxed">
                                By accessing and using this website, you agree to be bound by these Terms & Conditions. If you do not agree, please refrain from using this website.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-3 text-text-primary">2. Company Information</h2>
                            <p className="text-text-secondary leading-relaxed">
                                This website is owned and operated by Jebin Construction. All information provided is intended to give a general overview of our construction-related services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-3 text-text-primary">3. Scope of Services</h2>
                            <p className="text-text-secondary leading-relaxed">
                                The services described on this website include construction works, site supervision, and basic on-site material quality checks. Final scope, specifications, timelines, and costs are subject to written agreements after site evaluation.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-3 text-text-primary">4. Project Information</h2>
                            <p className="text-text-secondary leading-relaxed">
                                Project images, descriptions, and data shown on this website represent completed or representative works. They are displayed for reference purposes only and do not constitute a binding commitment.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-3 text-text-primary">5. Estimates & Quotations</h2>
                            <p className="text-text-secondary leading-relaxed">
                                Any estimates or indicative pricing provided through this website or enquiry forms are non-binding. Final quotations will be issued only after site inspection and mutual agreement.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-3 text-text-primary">6. Material Testing & Quality Control</h2>
                            <p className="text-text-secondary leading-relaxed">
                                Material testing mentioned on this website refers to practical site-level quality checks. Where certified laboratory testing is required, third-party laboratories may be recommended.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-3 text-text-primary">7. Intellectual Property</h2>
                            <p className="text-text-secondary leading-relaxed">
                                All content on this website, including text, images, logos, and designs, is the property of Jebin Construction and may not be reproduced without prior written permission.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-3 text-text-primary">8. Limitation of Liability</h2>
                            <p className="text-text-secondary leading-relaxed">
                                We are not liable for any loss or damage arising from the use of information provided on this website. Users are advised to seek professional consultation before making construction-related decisions.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-3 text-text-primary">9. External Links</h2>
                            <p className="text-text-secondary leading-relaxed">
                                This website may contain links to third-party websites for reference. We are not responsible for their content or practices.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-3 text-text-primary">10. Modifications</h2>
                            <p className="text-text-secondary leading-relaxed">
                                Jebin Construction reserves the right to modify these Terms & Conditions at any time without prior notice. Continued use of the website implies acceptance of the updated terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-3 text-text-primary">11. Governing Law</h2>
                            <p className="text-text-secondary leading-relaxed">
                                These Terms & Conditions shall be governed and interpreted in accordance with the laws of India.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-3 text-text-primary">12. Contact Information</h2>
                            <p className="text-text-secondary leading-relaxed">
                                For any questions regarding these Terms & Conditions, please contact us through the details provided on the website.
                            </p>
                        </section>
                    </div>
                </Card>
            </section>
        </div>
    )
}
