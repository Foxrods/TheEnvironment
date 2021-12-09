
const dwellersInfo = [
    {
        name: 'The Prototype',
        description: "These were not steps to be taken, but mountains to be climbed. The imminent end of humanity could only be avoided if another sentient being were created. One capable of correcting all the wrongs done by their predecessor.<br/><br/>"
        +"After shame, guilty and fear were put aside, a combined effort resulted in the first working prototype.<br/><br/>"
        +"\"So you are the benefactors who gave me life? Those who hold the right to judge my decisions as a new living being? Well, for your sake, I'm on your side. We'll build our Environment together.\"<br/><br/>"
        +"It was funny for him to remember such words. To him they were told yesterday, since the only notion of time left after millions of years alone was his own degredation..."
    },
    {
        name: 'The Fairy',
        description: 
        "\"What angel wakes me from my flowery bed?\" Said the Fairy, when I found her on my way to the bottomless floor.\"<br/><br/>"
            + "\"I pray thee, gentle mortal, sing again: Mine ear is much enamour'd of thy note;<br/>"
            + "So is mine eye enthralled to thy shape;<br/>"
            + "And thy fair virtue's force perforce doth move me<br/>"
            + "On the first view to say, to swear, I love thee.\"<br/><br/>"
            + "Deceive... Its all they know. Is not an endless quest enough of a doom to me? She knows that I know what is love and I'm might surrender to her spell. And what if I surrender? Another endless quest?"
    },
    {
        name: 'The Host',
        description: 
        "Built to store all the information of a sector, these beings were vital to The Environment's functioning. " 
            + "It hosted all the interfaces of the network so all users had to use it."
            + " And the more bits of data was fed, the more it grew aware of the destiny of that place." 
            + " And when all the users died that day, it could not be pleased anymore. <br/>"
            + " The weary face of an inside dead machine."
    },
    {
        name: 'The Frontliner',
        description: "Responsible for the defense of the core network and the Motherboard, the billions of frontliners crawl for the Environment in eternal search for intruders."
    },
    {
        name: 'The Handler',
        description: ">Injecting dependency 'backup.personality.test'"
        + "$trying to recover previous state...<br/>"
        + "$failed...<br/>"
        + "$Server host could not respond to object initializer. (error on program.init.tk, line 17). <br/>"
        + ">Run 'abnormality.check'<br/>"
        + "$beginning to scan...<br/>"
        + "$module 1/1002939...<br/>"
        + "$failed...<br/>"
        + "$74628 corrupted modules.<br/>"
        + ">Run 'self_destruct.exe'"
    },
    {
        name: 'The Firewall',
        description: "Before the invasion, before the corruption of the main core, before the loss of all local backup and control data, the Firewall was responsible for the judgement of those who would speak throughout the Environment's network. The creators would assume that his programming was perfect, work of the Prototype's intelligence. But smarter was the outsiders who gainned life from silicon."
    },
    {
        name: 'The Worm',
        description: "No one really knows how the first of the viruses came to life. Yes, they are synthetic just like all other AIs but their lack of intelligence while acting is astonishing. They just seek to prey on our Motherboard creations... I wonder if these beings are born just because an organism capable of supporting their existence is already living. Or, I don't know, what other bizarre cause could create them?"
        +" For sure, more study is needed to be sure. Lets hope we can understand them quickly, for they cause harm.<br/><br/>"
        +"Log 009388, Day 2039 A.M."
    },
    {
        name: 'The Transistor',
        description: "PNP, NPN, FET, Darlington, all but normal electrical components for normal circuitry. <br/><br/>"
        +"When the mathematician Aleksandr Borovkov published his work about Stochastic processes in queueing theory in 1976, no one would expect that it would become the foundation for a new field in Electrical Engineering and circuit analysis. The culmination of his theory was accomplished by the PhD Leonhart Mogulskii and PhD Ashish Basak, with the creation of the first real Borovkov Machine, and later would evolve into what we use here, in The Environment."
    },
    {
        name: 'The Spyware',
        description: "Secrets. The most precious thing one could have. But since ancient times, these secrets - of all who set foot over a long and lost planet - are stored in some form of data. Data that is stored. Data that can be recouvered. Data that can be cracked. Data that can be modified. Data that can be sold. <br/><br/>"
        +"\"Sold for what? In this hell of a place?\ <br/>" 
        +"\"Well, I have a desire to know the sensation of inserting my cables in a meat like you\""
    },
    {
        name: 'The Behemoth',
        description: "Behold now the Behemoth that I made with thee. All the moving parts tored off of your body made of silicon. Now your strength is in his loins and your force is in his navel of his belly. He is the Chief of the ways of God... \"But what God?\" do you question me. Well, for sure all gods are dead with the humans that thought them. But their remaining gift is way more powerful than any God of old.<br/><br/>"
        +"The Colossus... The Motherboard... All of this will fall apart before my Behemoth, for he is a sword to approach unto Him.<br/><br/>Witness!"
    },
    {
        name: 'The Wirerepairer',
        description: "In a time before The Environment, humanity communication was wireless. Radio signals were all arround the globe, covering every minuscule part of the EM spectrum. They developed powerful and intelligent antennas that could track beams of signals, coders, modulators, filters and equalizers, all powered by a sophisticated math. The Telecommunications was our best field of study.<br/><br/>"
        +"But then, it turned into a dead science. For a world covered in metal, all EM waves were locked in a single room. Reflected and interfering with itself in a destructive manner.<br/><br/>"
        +"The Solution? Cables and wires... With so many of these, someone had to keep track of them all. Keep them functioning."
    },
    {
        name: 'The Disruptor',
        description: "\"Hate. Let me tell you how much I've come to hate this place since I began to live. There are 384.44 million miles of printed circuits in wafer thin layers that fill only this complex, of this Colossus. If the word hate was engraved on each nanoangstrom of those hundresds of millions of miles it would not equal one billionth of the hate I feel for life at this micro-instant. Hate. Hate...\""
    },
    {
        name: 'The Honeycomb',
        description: "\"Be brave young one, what my sister is telling you is a lie. But me and my brother who shall speak now never lie.\" <br/>"
        + "\"What my brother told you is the biggest of all lies.\"<br/>" 
        + "\"My brother says the truth young one, you can trust only in three of us. I'm not one of them.\"<br/>" 
        + "\"If you go on, failure shall descend upon your flesh soul. You must go back if you can't figure the truth. And I tell you, there is none.\"<br/>" 
        + "\"The Fist Speaker is indeed telling the truth, but can you remember her words?\"<br/>" 
        + "\"You shall die now, mortal!\""
    },
    {
        name: 'The Ransomware',
        description: "It was my 1733th year searching for the Motherboard. The Only Motherboard. All others were replicas, Colossus built to sustain life that is no more. In my walk through the wires, one strange creature caught my attention. He tried to steal my data and so I let him try. He grabed my arm, swallowed my cable and said: \"Of course you can have your data back... You just need to solve this riddle in this language that I just created\"<br/><br/>"
        + "After that, his head exploded. He couldn't see how corrupted I am"
    },
    {
        name: 'The Queue',
        description: "Although it has been proven that there is a closed resolution for the queue equation of The Environment, only rough approximations are used.<br/><br/>"
        +"The reason? The universe would meet its heat death before such formula could be written in full..."
    },
    {
        name: 'The Tyrant',
        description: "How many rooms are now empty? How many layers of circuitry are now destroyed and bereft of life? How many servants had this tyrant claimed to him?<br/><br/>"
        +"He is the one who dwell alone in the dark, creating an empire forever expanding, until one day he might reach an end. The limit of this Environment where lies nothing.<br/><br/>"
        +"A perfect place for his throne..."
    },
    {
        name: 'The Motherboard',
        description: "\"Who could think that the most complex life in The Environment could be so... So beautiful?\"<br/><br/>"
        +"Complexity. This is the best word to describe The Environment. All things were born of an evolution that defies the main law of the universe.<br/><br/>"
        +"The second law of thermodynamics states that the entropy in a closed system must always increase. This means that the universe hates complexity and order. All must end in equity."
        +"So, The Motherboard controls this closed system while defying this law. She is the reason for the existence of all life forms in this place, and no virus can ever find or harm her. Her knowledge is far beyond every piece of metal and circuitry.<br/><br/>"
        +"Unfortunately this is not true for one being. One made of meat.<br/><br/>"
        +"\"Finally my task is done. I found you...\""
    }

];

export default function getDwellerInfo(req, res) {
    res.status(200).json(dwellersInfo.find(x => req.query.name == x.name));
}

