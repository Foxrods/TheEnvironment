import fairy from '../../images/fairy.png'

const dwellersInfo = [{
    name: 'Fairy',
    src: {fairy},
    description: <div>
        <p>
            "What angel wakes me from my flowery bed?" Said the Fairy, when I found her on my way to the bottomless floor.
        </p>
        <p>
            "I pray thee, gentle mortal, sing again: Mine ear is much enamour'd of thy note;
        </p>
        <p>
            So is mine eye enthralled to thy shape;
        </p>
        <p>
            And thy fair virtue's force perforce doth move me
        </p>
        <p> 
            On the first view to say, to swear, I love thee."
        </p>
        <p>
            Deceive... Its all they know. Is not an endless quest enough of a doom to me? She knows that I know what is love and I'm might surrender to her spell. And what if I surrender? Another endless quest?
        </p>
    </div>
    },
];

export default function getDwellerInfo(req, res) {
    console.log('oi');
    res.status(200).json(dwellersInfo.find(x => x.name == req.query));
}

