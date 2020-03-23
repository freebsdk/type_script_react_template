import axios from 'axios';

import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import "./Register.css";





const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [nickname, setNickname] = useState("");


    const checkEmail = () : boolean => {
        if(email.length <= 0) {
            alert("이메일 주소를 입력해 주세요");
            return false;
        }
        return true;
    }




    const checkPassword = () : boolean => {
        if(password.length < 4) {
            alert("패스워드가 너무 짧습니다.");
            return false;
        }

        if(passwordConfirm.length <= 0) {
            alert("패스워드를 확인칸에 한번 더 입력해 주세요");
            return false;
        }        

        if(password !== passwordConfirm) {
            alert("패스워드와 확인이 일치하지 않습니다.");
            return false;
        }

        return true;
    }



    const checkNickname = () : boolean => {
        if(nickname.length <= 0) {
            alert("닉네임을 입력해 주세요");
            return false;
        }
        return true;
    }




    const onClickJoin = () => {
        
        if(checkEmail() == false) return;
        if(checkPassword() == false) return;
        if(checkNickname() == false) return;
        
        requestJoin();
    }




    const requestJoin = () => {
        axios.get("http://localhost:5000/join", { 
            params : {
            Email : email,
            Password : password, 
            Nickname : nickname
        }})
        .then(res => {
            if(res.data.Error === "ok") {
                alert("가입이 완료되었습니다");
            }
            else if(res.data.Error === "exist_email") {
                alert("이미 가입된 이메일 입니다");
            }
            else if(res.data.Error === "exist_nickname") {
                alert("이미 사용중인 닉네임 입니다")
            }
            else {
                alert(`처리중 에러가 발생했습니다 : ${res.data.Error}`)
            }
        })
        .catch(error => {
            alert(`요청 오류가 발생했습니다 > ${error}`);
        });
    }

    


    return (
        <Table>
            <TableHead>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell className="col1">이메일</TableCell>
                    <TableCell className="col2"><TextField id="email" label="Email" variant="outlined" value={email} onChange={(e : any)=>{setEmail(e.currentTarget.value)}}/></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="col1">패스워드</TableCell>
                    <TableCell className="col2"><TextField id="password" label="Password" type="password" variant="outlined" value={password} onChange={(e : any)=>{setPassword(e.currentTarget.value)}}/></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="col1">패스워드 확인</TableCell>
                    <TableCell className="col2"><TextField id="password_confirm" label="Password confirm" type="password" variant="outlined" value={passwordConfirm} onChange={(e : any)=>{setPasswordConfirm(e.currentTarget.value)}}/></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="col1">닉네임</TableCell>
                    <TableCell className="col2"><TextField id="nickname" label="Nickname" variant="outlined" value={nickname} onChange={(e : any)=>{setNickname(e.currentTarget.value)}}/></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell colSpan={2}><Button variant="contained" color="primary" onClick={onClickJoin}>가입</Button></TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
};



export default Register;
