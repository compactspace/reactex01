import axios from 'axios';

const Ajaxbtn = () => {


    return (
        <div>

            <button onClick={() => {
                axios.get("http://localhost:4000/ajaxtest").then((response) => { console.log(response) })


            }

            }>아작스요청 버튼입니다잉</button>
        </div>

    )

}

export default Ajaxbtn;