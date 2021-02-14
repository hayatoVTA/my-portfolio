import React from 'react'
import Header from './Header'
import { useForm, Controller } from "react-hook-form";
import { ContactGoogleForm } from './ContactGoogleForm'
import axios from 'axios';

const options: string[] = ['案件に関して', 'TV又はYouTube等の出演に関して', 'その他']

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
                            <p>返信可能メールアドレス</p>
                        </th>
                        <td>
                            <input type={'text'} name={'mail'} ref={register({ required: true })} />
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <p>お問い合わせについて</p>
                        </th>
                        <td>
                            {options.map((option) => (
                            <div key={option}>
                                <label>
                                <input
                                    type={'radio'}
                                    name={'category'}
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
    submitParams.append(ContactGoogleForm.name, values.name)
    submitParams.append(ContactGoogleForm.mail, values.mail)
    submitParams.append(ContactGoogleForm.category, values.category)
    submitParams.append(ContactGoogleForm.inquiry, values.inquiry)
  
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
