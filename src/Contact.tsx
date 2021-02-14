import React from 'react'
import Header from './Header'
import { useForm, Controller } from "react-hook-form";
import { ContactGoogleForm } from './ContactGoogleForm'
import axios from 'axios';

const options: string[] = ['オプション1', 'オプション2']

const Contact: React.FC<any> = () => {
    const { register, handleSubmit } = useForm({
        mode: 'onChange',
      })
    
      const TestPrint =  () => {
          console.log(FormData)
      }
      
    return (
        <>
            <Header />
            <form noValidate onSubmit={handleSubmit(submit)}>
                <tbody>
                    <tr>
                        <th>
                            <p>お名前又は法人名</p>
                        </th>
                        <td>
                            <input type={'text'} name={'name'} ref={register({ required: true })} />
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <p>テスト</p>
                        </th>
                        <td>
                            {options.map((option) => (
                            <div key={option}>
                                <label>
                                <input
                                    type={'radio'}
                                    name={'test'}
                                    value={option}
                                    ref={register()}
                                />
                                {option}
                                </label>
                            </div>
                            ))}
                        </td>
                    </tr>
                </tbody>
                <p>お問い合わせ内容</p>
                <textarea name={'inquiry'} />
                <button type={'submit'}>送信する</button>
            </form>
        </>
    )
}

const submit = (values: any) => {
    const GOOGLE_FORM_ACTION = ContactGoogleForm.action
    // CORS
    const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'
  
    // PostのParm生成
    const submitParams = new FormData()
    submitParams.append(ContactGoogleForm.test, values.test)
  
    // 実行
    axios
      .post(GOOGLE_FORM_ACTION, submitParams)
      .then(() => {
        window.location.href = '/thanks' // 成功時
      })
      .catch((error) => {
        console.log(error) // 失敗時
      })
  }

export default Contact