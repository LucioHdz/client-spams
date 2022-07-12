import React, { useState } from 'react'
const URI = 'https://flask-api-origaska.herokuapp.com/'
const Test = () => {
  const [muestra,setMuestra]= useState(0);
  const [train,setTrain]= useState(0);
  const [lista1,setLista1] = useState([])
  const [lista2,setLista2] = useState([])
  const [spam,setSpam] = useState(0)
  const [ham,setHam] = useState(0)
  const [png,setPng] = useState()
  const [pred,setPred] = useState()
  const submit=(e)=>{
    e.preventDefault();
    if(muestra>train){
      fetch(`${URI}test/${muestra-1}/${train}`).then(data=> data.json())
      .then(data=>{
        setLista1(data.originals)
        setLista2(data.prediccion)
        setSpam(data.spams)
        setHam(data.hams)
        setPng("data:image/png;base64,"+data.png)
        setPred(data.gradosDePreddicion)
      })
    }
  }

  return (
    <section className=" d-flex flex-wrap m-3 resp-main justify-content-center">
      <form className="col-3  shadow-lg p-3 mb-3 me-5 bg-body rounded sticky-md-top" onSubmit={submit}>
        <div className="mb-3 col-12">
          <label for="correo " className="form-label fs-5">Muestra</label>
          <input type='number' required className="form-control" id="correo" onChange={(e)=>setMuestra(e.target.value)} />
        </div>
        <div className="mb-3 col-12">
          <label className="form-label fs-5" for='train'>Entrenamiento</label>
          <input type='number' required className="form-control" id="train"  onChange={(e)=>setTrain(e.target.value)} />
        </div>
        <div className="d-flex justify-content-end col-12">

          <button type='submit' className='btn btn-primary'><i className="bi bi-bar-chart-line-fill"></i> Analizar</button>
        </div>
      </form>

      <div className="d-flex flex-wrap flex-column col-7 cuerpo">
        
      <hr />
        <div className="col-11 shadow-sm p-3 mb-5 bg-body rounded">
          <h1><i class="bi bi-graph-up">Grafica</i></h1>

          <p>Predicción: <b>{pred}%</b> Total: <b>{spam+ham}</b>      Spam: <b>{spam}</b>      Ham: <b>{ham}</b></p>
          {png?<img src={png} class="img-thumbnail" alt="..." />:null}
        </div>
        
        
        
        
        <h1><i className="bi bi-clipboard-data-fill"> Datos</i></h1>
        <small className='text-dark-50'>**Los datos mostrados son el resultado de la prediccion, no incluye los datos de entrenamiento**</small>
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
        
      </div>
    </section >
  )
}

export default Test