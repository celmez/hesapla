$(document).ready(function(){
        $('#submit').click(function(){
                var vize = $('#vize').val()
                var final = $('#final').val()

                var a = vize * 40 / 100
                var b = final * 60 / 100
                var toplam = a + b

                if( vize == "" ){
                    alert("Ders ortalamanızın hesaplanabilmesi için lütfen vize notunuzu giriniz")
                }

                else if( final == "" ){
                    alert("Ders ortalamanızın hesaplanabilmesi için lütfen final notunuzu giriniz")
                }

                else if( toplam == 60 ){
                    alert("Tebrikler "+toplam+" ortalama ile bu dersten geçtiniz...")
                }

                else if( toplam > 60 ){
                    alert("Tebrikler "+toplam+" ortalama ile bu dersten geçtiniz...")
                    //$('.result').html(toplam)
                }

                else{
                    alert("Maalesef "+toplam+" ortalama ile bu dersten kaldınız!!!")
                }
            })
})