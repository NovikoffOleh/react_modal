
import './App.css';
import Modal from './Modal'
import { useState } from 'react';

function App() {

  const[modal, setModal]=useState({
    modal1: false,
    modal2: false
  })

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Проба модалки
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         
        </a>
        <button className="App-link" onClick={() => setModal({
          ...modal, modal1:true
        })}>
        відкрити
        </button>
      </header>

      <Modal
      title={"Газета Правда Крюківщини"}
      isOpend ={modal.modal1}
      onModalClose={()=> setModal({...modal, modal1: false})}
      >
       <p>Lorem ipsum malesuada lectus, morbi adipiscing commodo pellentesque quam leo. Tellus arcu ipsum, donec eros ligula amet eget porttitor vivamus gravida quam mattis nulla.</p>
       <p>Morbi porttitor malesuada sagittis leo sit elementum sagittis malesuada nam morbi: proin cursus proin nibh lorem nibh auctor ultricies quisque metus pharetra. In vivamus: et vitae risus justo fusce commodo eros ornare eget tellus lectus sit. Ornare ligulaamet non urna sodales quisque gravida, tellus adipiscing massa in eros pellentesque. 
       Eu porta tellus non sit curabitur gravida</p>
       
       <p>urna et morbi sodales massa ligula enim sem, ultricies molestie sagittis auctor morbi ligula nulla cursus, sagittis massa. 
       Orci donec lectus integer: congue, nulla maecenas sagittis sed, maecenas eu ut nibh arcu nam a pharetra nibh. Orci vivamus nam nulla, non rutrum a nulla quam enim, ornare: vitae ornare porta ut amet sodales nulla ornare non. Nibh in: auctor morbi, commodo nam sagittis maecenas pharetra bibendum, metus non sed adipiscing mattis auctor nec nibh metus, nam et tempus. Orci maecenas non vivamus vitae eu sem risus rutrum et porta vitae.</p>
       <p>Adipiscing mauris amet malesuada cursus gravida integer nam molestie pellentesque nibh, elementum sapien lorem, non duis porttitor. Ipsum orci risus at porttitor sit non orci urna lectus commodo sit congue orci amet sapien: arcu ut ultricies sodales. Urna: fusce, pharetra, sapien magna mattis tempus nibh morbi leo in ornare morbi fusce arcu sed urna rutrum mattis ligula. Mauris commodoporta 
        cursus sit in ultricies eget cursus bibendum lectus nam proin gravida nulla mattis mauris eget ipsum at ut cursus molestie. Nibh nec odio rutrum, integer adipiscing auctor arcu congue eros leo pellentesque proin vulputate eros duis eu sapien. Vitae: tellus duis ut morbi ipsum eros odio&nbsp;&mdash; enim orci nibh enim metus
         commodo adipiscing massa quisque integer risus enim arcu porta, magna. Amet malesuada, at rutrum molestie nibh integer sem gravida porttitor lorem ipsum maecenas bibendum sit lorem mauris bibendum sodales in sit. Nibh et gravida tellus pharetra eros quam, vivamus donec magna elementum tempus leo tempus eu: donec in.</p><p>Enim orci enim eu commodo proin sapien porttitor sem a ligula ipsum vitae vivamus&nbsp;&mdash; lorem. Curabitur malesuada rutrum fusce commodo&nbsp;&mdash; non quisque tellus justo orci risus at, donec proin quam maecenas at odio porttitor. Sodales lectus, nulla nam massa ultricies, sit quam metus tellus, sit, amet commodo nibh molestie cursus, metus nam eget congue vulputate ornare proin at. Curabitur ultricies sem mauris: mattis vivamus sem orci malesuada ut sed integer ultricies vulputate massa orci vitae molestie quam, eros. Odio justo eu elementum adipiscing at ornare, ut&nbsp;&mdash; curabitur eu commodo, diam vulputate maecenas, tempus adipiscing fusce. Vivamus, justo ultricies rutrum gravida maecenas adipiscing lectus at in cursus. Rutrum, risus donec amet sapien risus quisque congue auctor gravida urna molestie.</p><p>Rutrum enim eu commodo sapien risus: at vivamus eros molestie lorem tellus ut. Non, gravida mauris quam nibh enim nec, arcu sodales sem odio mattis, molestie risus at odio sem magna&nbsp;&mdash; massa. Sed eros amet risus vitae maecenas a nec congue tempus, rutrum lorem adipiscing a diam pellentesque.</p> 
        </Modal>

    </div>
  );
}

export default App;
