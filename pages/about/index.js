// pages/about.js
import Layout from '@/components/layout';

const About = () => {
  return (
    <Layout>
      <div className="container mt-4">
        <h2 className="text-center mb-4">About Us</h2>
        <div className="about-content">
          <p>
            Welcome to <strong>The Bulky Store</strong>, your go-to destination for a wide range of high-quality fake products.
          </p>
          <p>
            Our mission is to provide you with an unparalleled shopping experience, offering a diverse selection of products
            that exist only in the imaginative realm. From imaginary gadgets to fantastical fashion, we have it all.
          </p>
          <p>
            At <strong>The Bulky Store</strong>, we take pride in being the pioneers of the non-existent retail industry. Our team of
            non-existent experts works tirelessly to curate an exclusive collection of items that you won&apos;t find anywhere else.
          </p>
          <p>
            Explore our non-existent aisles and discover the joy of imaginary shopping. Thank you for choosing <strong>The Bulky Store</strong>,
            where imagination knows no bounds! My name is Harsh Dugar
          </p>
        </div>
      </div>

      <style jsx>{`
        .about-content {
          background-color: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        strong {
          font-weight: bold;
        }
      `}</style>
    </Layout>
  );
};

export default About;
