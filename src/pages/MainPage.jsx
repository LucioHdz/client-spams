import React from 'react'

const MainPage = () => {
  return (
    <section className=" d-flex flex-wrap m-3 resp-main">
      <form className="col-4  shadow-lg p-3 mb-3 me-5 bg-body rounded sticky-md-top">
        <div className="mb-3 col-12">
          <label for="correo " className="form-label fs-5">Correo</label>
          <textarea required className="form-control" id="correo" rows="3"></textarea>
        </div>
        <div className="mb-3 col-12">
          <label className="form-label fs-5">Etiqueta</label>
          <select required className="form-select form-select-sm" aria-label=".form-select-sm example">
            <option selected>Tipo de correo</option>
            <option value="spam">Spam</option>
            <option value="ham">Normal</option>
            <option value="desconocido">Desconocido</option>
          </select>
        </div>
        <div className="d-flex justify-content-end col-12">

          <button className='btn btn-primary'><i className="bi bi-bar-chart-line-fill"></i> Analizar</button>
        </div>






      </form>
      <hr />
      <hr />
      <div className="d-flex flex-wrap flex-column col-7 cuerpo">
        <div class="alert alert-success" role="alert">
          Felicidades tu correo no es Spam ^_^
        </div>
        <div class="alert alert-danger" role="alert">
          <b>¡Ten cuidado!</b> el correo es SPAM
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
            <tr className='text-center table-secondary'>
              <td>1</td>
              <td>spam</td>
              <td>ham</td>
            </tr>
            <tr className='text-center table-secondary'>
              <td>1</td>
              <td>spam</td>
              <td>ham</td>
            </tr>
            <tr className='text-center table-secondary'>
              <td>1</td>
              <td>spam</td>
              <td>ham</td>
            </tr>
            <tr className='text-center table-secondary'>
              <td>1</td>
              <td>spam</td>
              <td>ham</td>
            </tr>
            <tr className='text-center table-secondary'>
              <td>1</td>
              <td>spam</td>
              <td>ham</td>
            </tr>
            <tr className='text-center table-secondary'>
              <td>1</td>
              <td>spam</td>
              <td>ham</td>
            </tr>
            <tr className='text-center table-secondary'>
              <td>1</td>
              <td>spam</td>
              <td>ham</td>
            </tr>
            <tr className='text-center table-secondary'>
              <td>1</td>
              <td>spam</td>
              <td>ham</td>
            </tr>
          </tbody>
        </table>
        <hr />
        <div className="col-11 shadow-sm p-3 mb-5 bg-body rounded">
          <h1><i class="bi bi-graph-up">Grafica</i></h1>

          <p>Predicción: <b>80%</b> &nbsp;&nbsp;&nbsp;&nbsp;Total: <b>300</b>&nbsp;&nbsp;&nbsp;&nbsp;Spam: <b>200</b>&nbsp;&nbsp;&nbsp;&nbsp;Ham: <b>100</b></p>
          <img src="..." class="img-thumbnail" alt="..." />
        </div>
      </div>
    </section >
  )
}

export default MainPage