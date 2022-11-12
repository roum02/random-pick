import {Button, Form} from 'react-bootstrap';
import {useState} from "react";
import {Modal, NameTag} from '../../components/src';


const Main = () => {
    const [addMemberShowModal, setAddMemberShowModal] = useState(false)
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

    const handleDeleteMember = (id: number) => {
        const updatedMemberList = memberList.filter((
            item
        ) => item.id !== id)
        setMemberList(updatedMemberList)
    }

    const handleAddMember = (name: string) => {

    }

    return (
        <div>
            <header>
                <h1>2022 점심스터디 발제자 뽑기</h1>
            </header>
            <main>
                <div style={{display: "flex", alignItems: "center"}}>
                    <h2>인원:</h2>
                    {memberList.map((person, index) => (
                        <NameTag personInfo={person} key={index} onClick={handleDeleteMember}/>
                    ))}
                </div>
                <Button variant="success">
                    뽑기
                </Button>
            </main>
            <footer>
                <Button variant="outline-secondary" onClick={() => setAddMemberShowModal(true)}>
                    인원 추가하기
                </Button>
                <Button variant="outline-secondary">
                    뽑기 인원 변경하기
                </Button>
            </footer>
            <Modal show={addMemberShowModal} onClose={() => setAddMemberShowModal(false)}
                   child={
                       <Form className="mb-3">
                           <Form.Group>
                               <Form.Label>추가 인원의 성함을 입력해주세요.</Form.Label>
                               <Form.Control/>
                           </Form.Group>
                       </Form>
                   }
            />
        </div>
    )
}

export default Main;