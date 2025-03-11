import qrCodeImg from './assets/qr-code.png'

export default function App():React.JSX.Element{
  return(
    <article className='card shadow-sm'>
      <img className='card-img' src={qrCodeImg} alt="qr-code" />
      <h1 className='card-title text-bold'>Improve your front-end skills by building projects</h1>
      <p className='card-body text-regular'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </article>
  );
};