import {NameTag} from '../../components/src';
import {Button} from 'react-bootstrap';

const Main = () => {
    const memberList = [
        "이로움", "이로움"
    ]

    return (
        <header>
            <h1>2022 점심스터디 발제자 뽑기</h1>
            <main>
                <h2>인원:</h2>
                {memberList.map((person) => (
                    <NameTag name={person}/>
                ))}
                <button type="button">
                    뽑기
                </button>
            </main>
            <footer>
                <Button variant="outline-primary">
                    인원 추가하기
                </Button>
                <Button variant="outline-primary">
                    뽑기 인원 변경하기
                </Button>
            </footer>
        </header>
    )
}

export default Main;