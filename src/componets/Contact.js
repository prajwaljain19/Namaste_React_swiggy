const Contact = () => {
    return (

        <div>
            <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
            <form>
                <input 
                type="text" 
                className="border border-black p-2 m-2"
                placeholder="message" />
                <input 
                type="text" 
                className="border border-black p-2 m-2"
                placeholder="message" 
                />
                <button className="border p-2 m-2 rounded-lg hover: bg-gray-50">submit</button>
            </form>
        </div>
    );
};

export default Contact;

 
