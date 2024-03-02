//js object array

blogs = [
    // {
    //     title: "Introduction to JavaScript",
    //     author: "John Doe",
    //     content: "JavaScript is a programming language...",
    //     likes: 100,
    // },
    // {
    //     title: "Introduction to Js",
    //     author: "John",
    //     content: "Js is a programming language...",
    //     likes: 10,
    // },
    // {
    //     title: "Introduction to python",
    //     author: "JDoe",
    //     content:"python is a programming language...",
    //     likes: 120,
    // }

    {
        id: 1,
        title: "The Future of Artificial Intelligence",
        author: "John Smith",
        category: "Technology",
        description: "Artificial Intelligence, powered by deep learning, is revolutionizing industries by enabling machines to perform tasks requiring human intelligence, promising profound societal transformations..",
        content:`The future of Artificial Intelligence (AI) promises to be a transformative journey, permeating through every facet of human existence. With advancements in deep learning and neural networks, AI is poised to revolutionize industries ranging from healthcare and finance to transportation and entertainment. We anticipate AI-powered innovations to redefine the way we work, learn, and interact with technology, ushering in an era of unprecedented efficiency and productivity. However, this progression is not without its challenges, as ethical considerations, privacy concerns, and the potential for job displacement necessitate careful navigation. Nonetheless, with responsible development and thoughtful integration, AI holds the potential to amplify human capabilities, solve complex problems, and unlock new realms of possibility, ultimately reshaping the future of society as we know it.`,
        date: "2023-02-15",
        likes: 120,
        comments: [
            { user: "Alice", text: "Great article!" },
            { user: "Bob", text: "I learned a lot from this." }
        ],
        image: "/a.jpg" // Replace this with the actual URL of the image
    },
        {
            id: 2,
            title: "Advancements in Quantum Computing",
            author: "Emily Johnson",
            category: "Science",
            content: "Quantum computing is a cutting-edge field that harnesses the principles of quantum mechanics to perform computations at an unprecedented speed and scale. Unlike classical computers, which use bits to represent data as either 0 or 1, quantum computers use qubits, which can exist in multiple states simultaneously. This allows quantum computers to process vast amounts of information in parallel, making them ideal for solving complex problems that are beyond the capabilities of traditional computers. While quantum computing is still in its early stages, recent breakthroughs have paved the way for exciting applications in cryptography, optimization, and drug discovery.",
            date: "2023-03-10",
            likes: 95,
            comments: [
                { user: "Charlie", text: "Fascinating topic!" },
                { user: "David", text: "I'm excited to see where this goes." }
            ],
            image: "/q.avif"
        },
        {
            id: 3,
            title: "The Impact of 5G Technology on Society",
            author: "Sarah Chang",
            category: "Technology",
            content: "5G technology promises to revolutionize the way we communicate, work, and interact with our environment. With its significantly faster data speeds and lower latency, 5G networks will enable a wide range of applications, from autonomous vehicles and smart cities to augmented reality and telemedicine. The deployment of 5G infrastructure is expected to drive innovation and economic growth, creating new opportunities for businesses and consumers alike. However, concerns have been raised about the potential health and privacy implications of 5G technology, highlighting the need for careful regulation and oversight.",
            date: "2023-04-25",
            likes: 150,
            comments: [
                { user: "Emma", text: "Exciting times ahead!" },
                { user: "Frank", text: "I'm curious about the security risks." }
            ],
            image:"/5g.webp"
        },
        {
            id: 4,
            title: "The Quest for Sustainable Energy Sources",
            author: "Michael Davis",
            category: "Science",
            content: "As the world grapples with the challenges of climate change and environmental degradation, the search for sustainable energy sources has become more urgent than ever. Renewable energy technologies such as solar, wind, and hydroelectric power offer promising alternatives to fossil fuels, but their widespread adoption requires overcoming technical, economic, and regulatory barriers. Innovations in energy storage, grid integration, and efficiency improvements are critical to realizing the full potential of renewable energy and transitioning to a low-carbon future.",
            date: "2023-05-20",
            likes: 180,
            comments: [
                { user: "Grace", text: "We need to act fast to save the planet." },
                { user: "Henry", text: "Renewable energy is the way forward." }
            ],
            image:"/s.jpg"
        },
        {
            id: 5,
            title: "Exploring the Frontiers of Space Exploration",
            author: "Sophia Lee",
            category: "Science",
            content: "Space exploration has always captured the imagination of humanity, driving us to explore the unknown and expand our understanding of the universe. In recent years, advancements in technology have enabled unprecedented achievements in space exploration, from landing rovers on Mars to discovering exoplanets orbiting distant stars. Organizations like NASA and private companies like SpaceX are leading the charge in exploring new frontiers and pushing the boundaries of human knowledge. With ambitious plans to return to the Moon and journey to Mars, the future of space exploration holds limitless possibilities.",
            date: "2023-06-12",
            likes: 200,
            comments: [
                { user: "Isaac", text: "The final frontier awaits!" },
                { user: "Julia", text: "I dream of traveling to space one day." }
            ],
            image:"/s.avif"
        },
        {
            id: 6,
            title: "Exploring the Mysteries of Dark Matter",
            author: "Daniel Wong",
            category: "Science",
            content: "Dark matter is one of the most enigmatic substances in the universe, comprising about 27% of its total mass-energy content. Although dark matter does not emit, absorb, or reflect light, its gravitational effects are evident in the motion of galaxies and the large-scale structure of the cosmos. Scientists are actively researching dark matter to understand its nature, properties, and role in cosmic evolution. From particle detectors to astrophysical observations, ongoing experiments offer tantalizing clues that may unlock the secrets of dark matter and reshape our understanding of the universe.",
            date: "2023-07-21",
            likes: 120,
            comments: [
                { user: "Karen", text: "The universe is full of surprises!" },
                { user: "Liam", text: "I wonder what dark matter is made of." }
            ],
            image:"/d.jpg"
        },
        {
            id: 7,
            title: "The Future of Work in the Age of Automation",
            author: "Olivia Davis",
            category: "Technology",
            content: "Automation and artificial intelligence are transforming the nature of work, leading to shifts in employment patterns, skill requirements, and organizational structures. While automation promises increased efficiency, productivity, and innovation, it also raises concerns about job displacement, income inequality, and social disruption. As we navigate the transition to an automated future, it's essential to prioritize reskilling, lifelong learning, and inclusive policies to ensure that everyone can thrive in the digital economy.",
            date: "2023-08-14",
            likes: 105,
            comments: [
                { user: "Mason", text: "Adapting to change is key." },
                { user: "Nora", text: "We need policies to support displaced workers." }
            ],
            image:"/aut.jpg"
        },
        {
            id: 8,
            title: "Exploring the Frontiers of Space Exploration",
            author: "Benjamin Taylor",
            category: "Science",
            content: "Space exploration continues to capture the imagination of people worldwide, driving scientific discovery, technological innovation, and international collaboration. From robotic missions to Mars and beyond to ambitious plans for crewed missions to the Moon and Mars, humanity's quest to explore the cosmos is entering a new era of exploration. As space agencies and private companies embark on bold missions to explore the final frontier, we stand on the brink of unprecedented discoveries that may reshape our understanding of the universe and our place within it.",
            date: "2023-09-30",
            likes: 115,
            comments: [
                { user: "Oliver", text: "Space is the ultimate frontier." },
                { user: "Penelope", text: "I'm excited to see what we'll find." }
            ],
            image:"/sp.jpg"
        },
        {
            id: 9,
            title: "The Role of Blockchain in Transforming Industries",
            author: "Ava Wilson",
            category: "Technology",
            content: "Blockchain technology has emerged as a disruptive force with the potential to revolutionize industries ranging from finance and supply chain to healthcare and voting. By enabling secure, transparent, and decentralized transactions, blockchain offers solutions to longstanding challenges such as fraud, inefficiency, and lack of trust. As businesses and governments explore blockchain applications, we are witnessing the birth of a new digital economy built on principles of trust, transparency, and accountability.",
            date: "2023-10-18",
            likes: 100,
            comments: [
                { user: "Quinn", text: "Blockchain is the future of finance." },
                { user: "Rachel", text: "It's exciting to see new technologies in action." }
            ],
            image:"/block.webp"
        },


];

module.exports = blogs;     //imported in routes/blog.js