var valid=document.getElementById('validate')
        valid.style.display="none"
            
        let created = document.getElementById('create')
        created.addEventListener('click', fn)
        let btns = document.querySelectorAll('.btn')
        btns.forEach(singlebutton => {
            singlebutton.addEventListener('click', pass)
        })
        var a = []
        function fn() {
            b = document.getElementById('one').value
            a.push(b)
            c = document.getElementById('two').value
            a.push(c)
            d = document.getElementById('three').value
            a.push(d)
            e = document.getElementById('four').value
            a.push(e)
            valid.style.display="block"
        }
        var g
        var s = document.getElementById('five')
        function pass() {
            s.value += this.innerText
        }
        let unlocked = document.getElementById('unlock')
        unlocked.addEventListener('click', fn2)
        function fn2() {
            let v=s.value
           let x= v.split("")
            console.log(x)
            console.log(a)
            if(JSON.stringify(a)==JSON.stringify(x)){
                alert("the screet is unlocked")
            }
            else
            alert("please enter correct password")
        }
