const Message = ({ count }) => {

    let message = '';
    let message2 = '';
    switch (count) {
        case 0:
            message = 'You get Nothing from Santa 🎅';
            message2 = 'You were on the naughty list.';
            break;
        case 1:
            message = `You get ${count} present from Santa 🎅`;
            message2 = 'You were good this year';
            break;
        case 2:
            message = `You get ${count} presents from Santa 🎅`;
            message2 = 'Santa was very pleased with you';
            break;
        case 3:
            message = `You get ${count} presents from Santa 🎅`;
            message2 = 'You made Santa smile';
            break;
        case 4:
            message = `You get ${count} presents from Santa 🎅`;
            message2 = 'Santa was impressed';
            break;
        case 5:
            message = `You get ${count} presents from Santa 🎅✨`;
            message2 = 'You absolutely crushed it!';
            break;
    }

    return (
        <>
            <h2>{message}</h2>
            <h3>{message2}</h3>
        </>
    );
};

export default Message;
