 /* For activating tooltip
        $(function () {
            $('[data-toggle="tooltip"]').tooltip();
        });
        */

        $(function(){   

            $("#reserveButton").click(function(){

                $('#reserveModal').modal('toggle')

            });

            $("#loginButton").click(function(){

                $('#loginModal').modal('toggle')

            });

        });

        $(function(){   

            $(".carousel").carousel({interval: 2000});
            $("#carouselButton").click(function(){
                if($("#carouselButton").children("i").hasClass("fa-pause")) {

                    $(".carousel").carousel("pause");
                    $("#carouselButton").children("i").removeClass("fa-pause");
                    $("#carouselButton").children("i").addClass("fa-play");
                }else {

                        $(".carousel").carousel("cycle");
                        $("#carouselButton").children("i").removeClass("fa-play");
                        $("#carouselButton").children("i").addClass("fa-pause");

                }
 
            });
            
        });

        /* script for group buttons - pause and play
        $(function(){   

            $(".carousel").carousel({interval: 2000});
            $("#carouselPause").click(function(){
                $(".carousel").carousel("pause");
            });
            $("#carouselPlay").click(function(){
                $(".carousel").carousel("cycle");
            })
        }); */