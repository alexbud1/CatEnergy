const HowItWorks = () => {
    return ( 
        <div className="howItworks">
            <h1 className="howItworks_title">Як це працює</h1>
            <div className="fourstages">
                <div className="stage_block stage_bg1">
                    <img className="stage_img" src={require('../assets/leaf.png')} />
                    <p className="stage_text">Функціональне харчування містить тільки корисні поживні речовини.</p>
                </div>
                <div className="stage_block stage_bg2">
                    <img className="stage_img" src={require('../assets/liquid.png')} />
                    <p className="stage_text">Випускається у вигляді порошку, який лише потрібно залити кип'ятком і готово.</p>
                </div>
                <div className="stage_block stage_bg3">
                    <img className="stage_img" src={require('../assets/food.png')} />
                    <p className="stage_text">Замініть один-два прийоми їжі на наше функціональне харчування.</p>
                </div>
                <div className="stage_block stage_bg4">
                    <img className="stage_img" src={require('../assets/timer.png')} />
                    <p className="stage_text">Вже через місяць насолоджуйтесь змінами на краще вашого улюбленця.</p>
                </div>
            </div>
        </div>
    );
}
 
export default HowItWorks;