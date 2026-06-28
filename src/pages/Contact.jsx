import axios from "axios";
import { useEffect, useState } from "react"

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "", email: "", Phone: "", message: "",
    });
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);

            const res = await axios.post("http://elitewrist-api.onrender.com/api/v1/contact", formData);

            alert(res.data.message);

            setFormData({
                name: "", email: "", phone: "", message: "",
            });
        } catch (error) {
            console.log(error);

            alert(
                error?.response?.data?.message || "Something went to wrong"
            );
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="bg-black min-h-screen text-white py-16 px-4">
            <div className="max-w-3xl max-auto">
                <h1 className="text-5xl font-bold text-center mb-10 text-[#D4AF37]">
                    Contact Us
                </h1>

                <form onSubmit={handleSubmit}
                    className="bg-[#111] p-8 rounded-3xl border border-[#222] space-y-5">

                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-4 bg-black border border-[#333] rounded-xl"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-4 bg-black border border-[#333] rounded-xl"
                    />

                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-4 bg-black border border-[#333] rounded-xl"
                    />

                    <textarea
                        rows="5"
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-4 bg-black border border-[#333] rounded-xl"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#D4AF37] text-black font-bold py-4 rounded-xl"
                    >
                        {loading
                            ? "Sending..."
                            : "Send Message"}
                    </button>
                </form>

            </div>


        </div>
    );
};

export default Contact;