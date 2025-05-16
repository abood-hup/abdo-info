*{
    padding: 0%;
    margin: 0;
    box-sizing: 0;
}
.allconatnt{
    height: 100vh;
    background-color: #1d1d1d;
    overflow: hidden;
}
.conainar{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50% , -50%);
}
.eair{
    position: relative;
    width: 150px;
    height: 150px;
    background-color: white;
    border: 3px solid black;
    display: inline-block;
    border-radius: 50%;
    overflow: hidden;
}
.eair::after,
.eair::before{
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50% , -50%);
    border-radius: 50%;
    border: 3px solid black;
}
.eair::before{
    background-color: rgb(63, 63, 63);
    width: 60%;
    height: 60%;
    transition: background 0.5s;
}
.eair::after{
    width: 30%;
    height: 30%;
    background-color: black;
}
.gvin{
    position: absolute;
    width: 100%;
    height: 60%;
    background-color: rgb(71, 71, 71);
    z-index: 1;
    transition: height 0.5s;
}
.mouse{
    width: 350px;
    height: 150px;
    position: absolute;
    border-top: 10px solid black;
    top: 120%;
    left: 50%;
    transform: translate(-50%);
    border-radius: 50%;
    z-index: 1;
    animation: border-m 1s;
}

@keyframes border-m{
    from{
        border-radius: 0%;
    }
}
@keyframes border-m-h{
    from{
        border-radius: 0%;
    }
}
.lessins{
    position: absolute;
    top: 150%;
    left: 50%;
    transform: translate(-50% , 20%);
    transition: height 0.5s;

}
.lessin{
    width: 40px;
    height: 00px;
    background-color: white;
    display: inline-block;
    margin: 0 5px;
    transition: height 0.5s;
}
.allconatnt:hover .mouse{
    border-bottom: 10px solid black;
    border-top: none;
    top:100px;
    animation: border-m-h 1s;

}
.allconatnt:hover{
    background-color: #140300;
}
.allconatnt:hover .gvin{
    height: 50%;
    background-color: #912b03;
    rotate: 30deg;
    width: 150%;
}
.allconatnt:hover .gvin.l{
    rotate: -30deg;
    width: 100%;
    height: 50%;
    top: -10px;
    left: -25px;
}
.allconatnt:hover .lessin{
    height: 30px;
    border: 3px solid black;

}
.allconatnt:hover .eair::before{
    background-color: #ff0000;
}
.allconatnt:hover .eair{
    background-color: #830000;
}

