
import React from 'react'
import './Doctors.css'
import a from '../../assets/stutent.jpg'
import b from '../../assets/stutent.jpg'
import c from '../../assets/mohamed.jpeg'
import d from '../../assets/ali.jpeg'
import e from '../../assets/gamal.jpeg'
import f from '../../assets/stutent.jpg'
import g from '../../assets/stutent.jpg'
import h from '../../assets/stutent.jpg'
export default function Doctors() {
return <>
<div id="blog" className="blog doc" style={{padding: '2% 0px'}}>
  <div className="container">
    <div className=" head mx-auto text-center " >
      <h2 className="fw-bold fs-1 pt-3">اساتذة القسم</h2>
      
     
    </div>
    <div id="carouselExampleFade" className=" carousel slide carousel-fade col-lg-8 col-md-12 m-auto" data-bs-ride="carousel" >
      <div className="carousel-inner">
        <div className="carousel-item">
          <div className=" image m-auto w-100   text-center mt-5">
            <img height={170} src={a} className=" rounded-circle" style={{width: '19%'}} />
            <img height={170} src={b} className=" rounded-circle" style={{width: '19%'}} />
            <img height={170}src={c} className=" rounded-circle" style={{width: '24%'}} />
            <img height={170} src={d} className=" rounded-circle" style={{width: '19%'}} />
            <img height={170} src={e} className=" rounded-circle" style={{width: '19%'}} />
            <p className="mt-2 mb-0 fs-4 fw-semibold text-warning">د/محمد حسين</p>
          
            <p style={{color: 'rgb(90, 85, 85)', marginTop: 19 , fontSize:'30px'}}>رئيس قسم هندسة النظم والحاسبات بكلية الهندسة بنات</p>
          </div>
        </div>
        <div className="carousel-item">
          <div className=" image m-auto w-100   text-center mt-5">
            <img height={170} src={b} className=" rounded-circle" style={{width: '19%'}} />
            <img height={170}  src={c} className=" rounded-circle" style={{width: '19%'}} />
            <img height={170} src={d} className=" rounded-circle" style={{width: '24%'}} />
            <img height={170} src={e} className=" rounded-circle" style={{width: '19%'}} />
            <img height={170} src={f} className=" rounded-circle" style={{width: '19%'}} />
            <p className="mt-2 mb-0  fs-4 fw-semibold text-warning">د/ علي راشد</p>
           
            <p style={{ color: 'rgb(90, 85, 85)', fontSize:'30px', marginTop: 19}}>استاذ في كلية الهندسة قسم النظم والحاسبات</p>
          </div>
        </div>
        <div className="carousel-item">
          <div className=" image m-auto w-100   text-center mt-5">
            <img height={170} src={c} className=" rounded-circle" style={{width: '19%'}} />
            <img height={170} src={d} className=" rounded-circle" style={{width: '19%'}} />
            <img height={170} src={e} className=" rounded-circle" style={{width: '24%'}} />
            <img height={170} src={f} className=" rounded-circle" style={{width: '19%'}} />
            <img height={170} src={g} className=" rounded-circle" style={{width: '19%'}} />
            <p className="mt-2 mb-0 fw-semibold fs-4 text-warning">د/جمال ثروت</p>
          
            <p style={{ color: 'rgb(90, 85, 85)', fontSize:'30px', marginTop: 19}}>استاذ في كلية الهندسة قسم النظم والحاسبات</p>
          </div>
        </div>
        <div className="carousel-item">
          <div className=" image m-auto w-100   text-center mt-5">
            <img height={170} src={d} className=" rounded-circle" style={{width: '19%'}} />
            <img height={170} src={e} className=" rounded-circle" style={{width: '19%'}} />
            <img height={170} src={f} className=" rounded-circle" style={{width: '24%'}} />
            <img height={170} src={g} className=" rounded-circle" style={{width: '19%'}} />
            <img height={170} src={h} className=" rounded-circle" style={{width: '19%'}} />
            <p className="mt-2 mb-0 fw-semibold fs-4 text-warning">د/ايهاب النفراوي</p>
          
            <p style={{ color: 'rgb(90, 85, 85)', fontSize:'30px', marginTop: 19}}>استاذ في كلية الهندسة قسم النظم والحاسبات</p>
          </div>
        </div>
        <div className="carousel-item">
          <div className=" image m-auto w-100   text-center mt-5">
            <img height={170} src={e} className=" rounded-circle" style={{width: '19%'}} />
            <img height={170} src={f} className=" rounded-circle" style={{width: '19%'}} />
            <img height={170} src={g} className=" rounded-circle" style={{width: '24%'}} />
            <img height={170} src={h} className=" rounded-circle" style={{width: '19%'}} />
            <img height={170} src={a} className=" rounded-circle" style={{width: '19%'}} />
     
            <p className="mt-2 mb-0 fw-semibold fs-4 text-warning">د/مروة سليم</p>
          
          <p style={{ color: 'rgb(90, 85, 85)', fontSize:'30px', marginTop: 19}}>استاذ في كلية الهندسة قسم النظم والحاسبات</p>
        </div>
        </div>
        <div className="carousel-item">
          <div className=" image m-auto w-100   text-center mt-5">
            <img height={170} src={f} className=" rounded-circle" style={{width: '19%'}} />
            <img height={170} src={g} className=" rounded-circle" style={{width: '19%'}} />
            <img height={170} src={h} className=" rounded-circle" style={{width: '24%'}} />
            <img height={170} src={a} className=" rounded-circle" style={{width: '19%'}} />
            <img height={170} src={b} className=" rounded-circle" style={{width: '19%'}} />
            <p className="mt-2 mb-0 fw-semibold fs-4 text-warning">د/منال مصطفى</p>
          
            <p style={{ color: 'rgb(90, 85, 85)', fontSize:'30px', marginTop: 19}}>استاذ في كلية الهندسة قسم النظم والحاسبات</p>
          </div>
        </div>
        
        <div className="carousel-item active">
          <div className=" image m-auto w-100   text-center mt-5">
            <img height={170} src={g} className=" rounded-circle" style={{width: '19%'}} />
            <img height={170} src={h} className=" rounded-circle" style={{width: '19%'}} />
            <img height={170} src={a} className=" rounded-circle" style={{width: '24%'}} />
            <img height={170} src={b} className=" rounded-circle" style={{width: '19%'}} />
            <img height={170} src={c} className=" rounded-circle" style={{width: '19%'}} />
            <p className="mt-2 mb-0 fw-semibold fs-4 text-warning">د/ريهام ابو بيه</p>
          
            <p style={{ color: 'rgb(90, 85, 85)', fontSize:'30px', marginTop: 19}}>استاذ في كلية الهندسة قسم النظم والحاسبات</p>
          </div>
        </div>


        <div className="carousel-item">
          <div className=" image m-auto w-100   text-center mt-5">
            <img height={170} src={h} className=" rounded-circle" style={{width: '19%'}} />
            <img height={170} src={a} className=" rounded-circle" style={{width: '19%'}} />
            <img height={170} src={b} className=" rounded-circle" style={{width: '24%'}} />
            <img height={170} src={c} className=" rounded-circle" style={{width: '19%'}} />
            <img height={170} src={d} className=" rounded-circle" style={{width: '19%'}} />
            <p className="mt-2 mb-0 fw-semibold fs-4 text-warning">د/ خليل محمد</p>
          
            <p style={{ color: 'rgb(90, 85, 85)', fontSize:'30px', marginTop: 19}}>استاذ في كلية الهندسة قسم النظم والحاسبات</p>
          </div>

      </div>
      <button className="carousel-control-prev" style={{width: '38%', height: '68%', backgroundColor: 'rgba(255,255,255,.9)'}} type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      </button>
      <button className="carousel-control-next" style={{width: '38%', height: '68%', backgroundColor: 'rgba(255,255,255,.9)'}} type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      </button>
    </div>
  </div>
</div>
</div>

</>
}

