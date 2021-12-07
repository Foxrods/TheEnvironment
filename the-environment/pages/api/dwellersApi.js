
const dwellersInfo = [{
        name: 'The Fairy',
        description: 
        "\"What angel wakes me from my flowery bed?\" Said the Fairy, when I found her on my way to the bottomless floor. <br/>"
            + "\"I pray thee, gentle mortal, sing again: Mine ear is much enamour'd of thy note;<br/>"
            + "So is mine eye enthralled to thy shape;<br/>"
            + "And thy fair virtue's force perforce doth move me<br/>"
            + "On the first view to say, to swear, I love thee.\"<br/>"
            + "Deceive... Its all they know. Is not an endless quest enough of a doom to me? She knows that I know what is love and I'm might surrender to her spell. And what if I surrender? Another endless quest?"
    },
    {
        name: 'The Host',
        description: 
        "Built to store all the information of a sector, these beings were vital to The Environment's functioning. " 
            + "It hosted all the interfaces of the network so all users had to use it."
            + "And the more bits of data was fed, the more it grew aware of the destiny of that place." 
            + "And when all the users died that day, it could not be pleased anymore. <br/>"
            + "The weary face of an inside dead machine."
    }
];

export default function getDwellerInfo(req, res) {
    res.status(200).json(dwellersInfo.find(x => req.query.name == x.name));
}

