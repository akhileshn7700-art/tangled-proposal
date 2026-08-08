const noBtn = document.getElementById("noBtn");

// Move NO button away
function moveNoButton() {
  const x = Math.floor(Math.random() * 240) - 120;
  const y = Math.floor(Math.random() * 120) - 60;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("click", moveNoButton);

// YES button action
function showForever() {
  document.body.innerHTML = `
    
    <div class="yes-page">

      <div class="yes-overlay"></div>

      <div class="yes-content">

        <div class="hearts">💜 💜 💜</div>

        <h1>She Said YES 💜</h1>

        <p>
          Ee website lo prathi page lo unna feeling,
          ippudu oka andamaina answer ga maarindi ✨
        </p>

        <p>
          Naa hrudayam ki dorikina ati andamaina gift nuvve, Monika 💜
        </p>

        <div class="love-line">
          I Love You Forever ➿✨
        </div>

        <a href="the-end.html" class="final-next-btn">Next Page 💜</a>

      </div>

    </div>

  `;

  const style = document.createElement("style");

  style.innerHTML = `
    
    *{
      margin:0;
      padding:0;
      box-sizing:border-box;
    }

    .yes-page{
      min-height:100vh;

      background:url('images/tangled 💜.jpg') center center/cover no-repeat fixed;

      display:flex;
      justify-content:center;
      

      /* Move content to bottom */
      align-items: flex-end;
      position:relative;

      font-family:'Poppins',sans-serif;

      overflow:hidden;

      /* bottom spacing */
      padding-bottom:60px;
    }

    .yes-overlay{
      position:absolute;
      inset:0;

      background:linear-gradient(
        to bottom,
        rgba(10,5,20,0.35),
        rgba(15,5,25,0.55),
        rgba(10,5,20,0.82)
      );
    }

    .yes-content{
      position:relative;
      z-index:2;

      text-align:center;

      padding:20px;

      animation:fadeIn 1.5s ease;
    }

    .hearts{
      font-size:34px;
      margin-bottom:18px;
      animation:float 3s ease-in-out infinite;
    }

    h1{
      font-size:72px;
      color:#ffd86b;

      text-shadow:
        0 0 12px rgba(255,216,107,0.8),
        0 0 30px rgba(255,180,50,0.4);

      margin-bottom:20px;

      font-family:'Cinzel',serif;
    }

    p{
      color:white;
      font-size:20px;
      line-height:1.9;

      text-shadow:0 2px 10px rgba(0,0,0,0.6);

      margin-bottom:16px;
    }

    .love-line{
      margin-top:26px;

      font-size:28px;
      font-weight:600;

      color:#ffb3d1;

      text-shadow:0 0 18px rgba(255,179,209,0.5);
    }

    .final-next-btn{
      display:inline-block;
      margin-top:28px;
      padding:14px 30px;
      border-radius:16px;
      background:linear-gradient(135deg,#ffd86b,#ffb347);
      color:#2b1a05;
      text-decoration:none;
      font-size:18px;
      font-weight:700;
      box-shadow:0 10px 24px rgba(255,216,107,0.35);
      transition:0.3s;
    }

    .final-next-btn:hover{
      transform:translateY(-3px) scale(1.05);
    }

    @keyframes fadeIn{
      from{
        opacity:0;
        transform:translateY(20px);
      }
      to{
        opacity:1;
        transform:translateY(0);
      }
    }

    @keyframes float{
      0%,100%{
        transform:translateY(0);
      }
      50%{
        transform:translateY(-8px);
      }
    }

    @media(max-width:768px){

      h1{
        font-size:44px;
      }

      p{
        font-size:16px;
      }

      .love-line{
        font-size:22px;
      }

      .hearts{
        font-size:28px;
      }

      .final-next-btn{
        font-size:16px;
        padding:12px 24px;
      }
    }

  `;

  document.head.appendChild(style);
}
