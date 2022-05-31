import { useDispatch, useSelector } from "react-redux";
import { logInRequest } from "./store/user/user.actions";

function App() {
  const user = useSelector(state=> state.user)
  const dispath = useDispatch()
  return (    
      <div className="App">
        <h3> 로그인 상황을 가정하여 api 기능은 함수로 setTimeout 사용 하여 일정시간뒤 promise 객체를 리턴하는 방식으로 구성하고
          <br></br>로그인 버튼 클릭시 지정된 id, pw 전송하는 방식으로 간단하게 redux-saga 를 이용한 비동기 처리 로직을 구현함
        </h3>

        <div> 로그인 버튼 클릭시 id : spare8433 pw : 123456 데이터를 전송함 (콘솔에서 확인가능)</div>
        <button onClick={()=>dispath(logInRequest({id:'spare8433',pw:'123456'}))}>로그인</button>
        <br></br>
        <br></br>
        <div>리덕스에 저장된 데이터 불러오기 (콘솔에서 확인가능)</div>
        <button onClick={()=>console.log(!!user && user)}>확인</button>
      </div>
  );
}

export default App;
