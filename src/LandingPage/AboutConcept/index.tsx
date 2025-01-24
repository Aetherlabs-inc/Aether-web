import Image from "next/image";

const AboutConcept = () => {
    return (
        <section className="">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                {/* Text Section */}
                <div className="font-lightsm:text-lg">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
                        Revolutionizing Art Authentication for a New Era
                    </h2>
                    <p className="mb-4">
                        In today’s art market, authenticity is everything. With counterfeit artworks on the rise, it has never been more critical for artists, galleries, and collectors to secure the authenticity of their creations and investments. The old ways of certifying art are outdated—easily forged, cumbersome to manage, and untraceable. But we believe there’s a better way.
                    </p>
                    <p className="mb-4">
                        <strong>Aether</strong> combines the power of NFC technology and blockchain security to create a foolproof solution for authenticating artwork. Every piece of art registered on our platform is linked to a unique, tamper-proof digital certificate stored securely on the blockchain, ensuring a permanent, transparent, and traceable record of authenticity.
                    </p>
                    <p>
                        Our mission is to empower artists and safeguard the value of their work, ensuring that every creation, whether a painting, sculpture, or digital piece, is forever verifiable and truly authentic.
                    </p>
                </div>

                {/* Image Section */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <Image
                        className="w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
                        alt="NFC Art Authentication"
                        width={1000}
                        height={1000}
                    />
                    <Image
                        className="mt-4 w-full lg:mt-10 rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
                        alt="Blockchain Security"
                        width={1000}
                        height={1000}
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutConcept;
