var isPreviousEventComplete = true;

    var isDataAvailable = true;

    jQuery(window).scroll(function () {

        var postlength = jQuery('.count').length;

        var windowHeight = jQuery(window).height();

        var windowwidth = jQuery(window).width();

        var documentHeight = jQuery(document).height();

        var footerHeight = jQuery(".site-footer").innerHeight();

        // var lastDivHeight = jQuery(".case-studies-list .col-sm-6:eq(-4)").outerHeight();

        var bottomHeight = lastDivHeight+footerHeight;



        if (postlength > 6) {

        if (windowwidth < 1000) {

            var lastDivHeight = jQuery(".case-studies-list .col-sm-6:eq(-4)").offset().top - jQuery(".header.header--fixed").height();

        }

        else{

          var lastDivHeight = jQuery(".case-studies-list .col-sm-6:eq(-4)").offset().top;

      }  

        if (jQuery(window).scrollTop() >= lastDivHeight) {

            if (isPreviousEventComplete && isDataAvailable) {

                isPreviousEventComplete = false;

                jQuery(".loadmore").show();

                pageNumber++;

                var data = {

                    "action": "morepostss"

                };

                data = "pageNumber=" + pageNumber + "&perpage=" + perpage +  "&postlength=" + postlength  + "&" + jQuery.param(data);;

                jQuery.ajax({

                    type: "POST",

                    dataType: "html",

                    url: ajax_posts.ajaxurl,

                    data: data,

                    success: function (data) {

                        var $data = jQuery(data);

                        if ($data.length) {

                            jQuery("#ajax-posts").append($data);

                            var postlenghtafter = jQuery('.count').length;

                            var found_posts = jQuery('#found_value').val();

                            if (postlenghtafter == found_posts ) {

                                isDataAvailable = false;

                                jQuery(".loadmore").hide();

                            } else {

                                isPreviousEventComplete = true;

                            }

                        }

                        else{

                            return false;

                        }

                    },



                });

            }

        }

        }

        return false;

    });
