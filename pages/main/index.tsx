import {NameTag} from '../../components/src';
import {Button} from 'react-bootstrap';
import {useState} from "react";

const Main = () => {
    const [memberList, setMemberList] = useState(
        [
            {
                id: 1,
                name: '1'
            },
            {
                id: 2,
                name: '2'
            },
        ])

    const handleDelete = (id: number) => {
        const updatedMemberList = memberList.filter((
            item
        ) => item.id !== id)
        console.log(id)
        setMemberList(updatedMemberList)
    }

    return (
        <header>
            <h1>2022 점심스터디 발제자 뽑기</h1>
            <main>
                <h2>인원:</h2>
                {memberList.map((person, index) => (
                    <NameTag personInfo={person} key={index} onClick={handleDelete}/>
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