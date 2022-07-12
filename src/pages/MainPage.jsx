import React, { useState } from 'react'

const URI = 'https://flask-api-origaska.herokuapp.com/'

const MainPage = () => {
  const [correo,setCorreo] = useState()
  const [spam,setSpam] = useState()
  const [spamN,setSpamN] = useState(0)
  const [label,setLabel] = useState()

  const [muestra,setMuestra]= useState(0);
  const [train,setTrain]= useState(0);
  const [lista1,setLista1] = useState([])
  const [lista2,setLista2] = useState([])
  const [ham,setHam] = useState(0)
  const [png,setPng] = useState()
  const [pred,setPred] = useState()
  const submit=(e)=>{
    e.preventDefault();
    // Agregamos datos a la base de datos
    fetch(`${URI}/add`,{
      body:{
        mail:correo,
        tag:label
      }
    }).then(data=>data.json())
    .then(res =>{
      if (res){

      }
    })
    if(muestra>train){
      fetch(`${URI}test/${muestra-1}/${train}`).then(data=> data.json())
      .then(data=>{
        setLista1(data.originals)
        setLista2(data.prediccion)
        setSpam(data.prediccion[data.prediccion.length-1])
        setSpamN(data.spams)
        setHam(data.hams)
        setPng("data:image/png;base64,"+data.png)
        setPred(data.gradosDePreddicion)
      })
    }
  }


  return (
    <section className=" d-flex flex-wrap m-3 resp-main">
      <form onSubmit={submit} className="col-4 formMain shadow-lg p-3 mb-3 me-5 bg-body rounded sticky-md-top">
        <div className="mb-3 col-12">
          <label  className="form-label fs-5">Correo</label>
          <textarea required className="form-control" id="correo" rows="3" onChange={(e)=>setCorreo(e.target.value)}></textarea>
        </div>
        <div className="mb-3 col-12">
          <label className="form-label fs-5">Etiqueta</label>
          <select required className="form-select form-select-sm" aria-label=".form-select-sm example" onChange={(e)=>setLabel(e.target.value)}>
            <option value="spam">Spam</option>
            <option value="ham">Normal</option>
          </select>
        </div>
        <div className="mb-3 col-12">
          <label className="form-label fs-5">Muestra</label>
          <input type='number' required className="form-control" id="Muestra" rows="3" onChange={(e)=>setMuestra(e.target.value)}/>
        </div>
        <div className="mb-3 col-12">
          <label for="Test" className="form-label fs-5">Entrenamiento</label>
          <input type='number' required className="form-control" id="Test" rows="3" onChange={(e)=>setTrain(e.target.value)}/>
        </div>
        <div className="d-flex justify-content-end col-12">

          <button type='submit' className='btn btn-primary'><i className="bi bi-bar-chart-line-fill"></i> Analizar</button>
        </div>






      </form>
      <hr />
      <hr />
      <div className="d-flex flex-wrap flex-column col-7 cuerpo">
        
        {spam?spam.trim()==='spam'?
        <div class="alert alert-danger" role="alert">
          <b>¡Ten cuidado!</b> el correo es SPAM
        </div>:
        <div class="alert alert-success" role="alert">
          Felicidades tu correo no es Spam ^_^
        </div>:null
      }
        
        <div className="col-11 shadow-sm p-3 mb-5 bg-body rounded">
          <h1><i class="bi bi-graph-up">Grafica</i></h1>

          <p>Predicción: <b>{pred}%</b> &nbsp;&nbsp;&nbsp;&nbsp;Total: <b>{spamN+ham}</b>&nbsp;&nbsp;&nbsp;&nbsp;Spam: <b>{spamN}</b>&nbsp;&nbsp;&nbsp;&nbsp;Ham: <b>{ham}</b></p>
          {png?<img src={png} class="img-thumbnail" alt="..." />:null}
        </div>
        <table class="table col-11">
          <thead class="table-dark">
            <tr className='text-center'>
              <th>#</th>
              <th>Tipo</th>
              <th>Prediccion</th>
            </tr>
          </thead>
          <tbody>
          {lista1.map((data,i)=>{
              return (<tr key={i} className='text-center table-secondary'>
              <td>{i+1}</td>
              <td>{data}</td>
              <td>{lista2[i]}</td>
            </tr>)
            })}
          </tbody>
        </table>
        <hr />
        
      </div>
    </section >
  )
}

export default MainPage