$(document).ready(function() {
	"use strict";

	//Initialize tooltips
	$('.nav-tabs > li a[title]').tooltip();

    //Wizard
    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

    	var $target = $(e.target);

    	if ($target.parent().hasClass('disabled')) {
    		return false;
    	}
    });

    $(".next-step").click(function (e) {

    	var $active = $('.wizard .nav-tabs li.active');
    	$active.next().removeClass('disabled');
    	nextTab($active);

    });
    $(".prev-step").click(function (e) {

    	var $active = $('.wizard .nav-tabs li.active');
    	prevTab($active);

    });

    // Step Wizard

    var navListItems = $('div.setup-panel div a'),
    allWells = $('.setup-content'),
    allNextBtn = $('.nextBtn');

    allWells.hide();

    navListItems.click(function (e) {
    	e.preventDefault();
    	var $target = $($(this).attr('href')),
    	$item = $(this);

    	if (!$item.hasClass('disabled')) {
    		navListItems.removeClass('btn-primary').addClass('btn-danger');
    		$item.addClass('btn-primary');
    		allWells.hide();
    		$target.show();
    		$target.find('input:eq(0)').focus();
    	}
    });

    allNextBtn.click(function () {
    	var curStep = $(this).closest(".setup-content"),
    	curStepBtn = curStep.attr("id"),
    	nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
    	curInputs = curStep.find("input[type='text'],input[type='url']"),
    	isValid = true;

    	$(".form-group").removeClass("has-error");
    	for (var i = 0; i < curInputs.length; i++) {
    		if (!curInputs[i].validity.valid) {
    			isValid = false;
    			$(curInputs[i]).closest(".form-group").addClass("has-error");
    		}
    	}

    	if (isValid) nextStepWizard.removeAttr('disabled').trigger('click');
    });

    $('div.setup-panel div a.btn-primary').trigger('click');
});

function nextTab(elem) {
	$(elem).next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
	$(elem).prev().find('a[data-toggle="tab"]').click();
}