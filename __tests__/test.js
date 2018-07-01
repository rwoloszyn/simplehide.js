require('jest');

jest.dontMock('fs')
  .dontMock('jquery')
  .dontMock('../simplehide');

require('../simplehide');
var $ = require('jquery');

describe('Initialization test', () => {
  test('Initialize plugin by id', () => {
    document.body.innerHTML = '<div id="testID">Test data</div>';

    $('#testID').simplehide();

    expect($('#testID').is(":hidden")).toBeTruthy();
    expect($('#testID').next().is(":visible")).toBeFalsy();
    //Check if next element is link
    expect($('#testID').next().is('a, a *')).toBeTruthy();
  });


  test('Initialize by class', () => {
    document.body.innerHTML = '<div class="classTest">Test data</div>';

    $('.classTest').simplehide();

    expect($('.classTest').is(":hidden")).toBeTruthy();
    expect($('.classTest').next().is(":visible")).toBeFalsy();
    //Check if next element is link
    expect($('.classTest').next().is('a, a *')).toBeTruthy();
  });

  test('Initialize by html tag', () => {
    document.body.innerHTML = '<customtag>Test data</customtag>';

    $('customtag').simplehide();

    expect($('customtag').is(":hidden")).toBeTruthy();
    expect($('customtag').next().is(":visible")).toBeFalsy();
    //Check if next element is link
    expect($('customtag').next().is('a, a *')).toBeTruthy();
  });

  test('Initialize by multiple same DOMs with same class', () => {
    document.body.innerHTML = '<div id="1" class="classTest">Test data</div>' +
      '<div id="2" class="classTest">Test data</div>' +
      '<div id="3" class="classTest">Test data</div>';

    $('.classTest').simplehide();

    $('.classTest').each((index, DOMElement) => {
      expect($(DOMElement).is(":hidden")).toBeTruthy();
      expect($(DOMElement).next().is(":visible")).toBeFalsy();
      //Check if next element is link
      expect($(DOMElement).next().is('a, a *')).toBeTruthy();
    });
  });
});


describe('Default values', () => {
  test('Default with class single initialization', function () {
    document.body.innerHTML = '<div class="classTest">Test data</div>';

    $('.classTest').simplehide();

    expect($('.classTest').next().is('a, a *')).toBeTruthy();
    expect($('.classTest').next().text()).toEqual('Show...');
  });

  test('Default with multiple initialization', function () {
    document.body.innerHTML = '<div id="1" class="classTest">Test data</div>' +
      '<div id="2" class="classTest">Test data</div>' +
      '<div id="3" class="classTest">Test data</div>';

    $('.classTest').simplehide();

    $('.classTest').each((index, DOMElement) => {
      expect($(DOMElement).next().is('a, a *')).toBeTruthy();
      expect($(DOMElement).next().text()).toEqual('Show...');
    });
  });

  test('Default with index initialization', function () {
    document.body.innerHTML = '<div id="testID">Test data</div>';

    $('#testID').simplehide();

    expect($('#testID').next().is('a, a *')).toBeTruthy();
    expect($('#testID').next().text()).toEqual('Show...');
  });

  test('Default with index initialization with custom html tag', () => {
    document.body.innerHTML = '<customtag>Test data</customtag>';

    $('customtag').simplehide();

    expect($('customtag').next().is('a, a *')).toBeTruthy();
    expect($('customtag').next().text()).toEqual('Show...');
  });
});



describe('Custom show link', () => {
  test('Default with class single initialization', function () {
    document.body.innerHTML = '<div class="classTest">Test data</div>';

    $('.classTest').simplehide({
      showLink: '<a href="#">Versions...</a>'
    });

    expect($('.classTest').next().is('a, a *')).toBeTruthy();
    expect($('.classTest').next().text()).toEqual('Versions...');
  });

  test('Default with multiple initialization', function () {
    document.body.innerHTML = '<div id="1" class="classTest">Test data</div>' +
      '<div id="2" class="classTest">Test data</div>' +
      '<div id="3" class="classTest">Test data</div>';

    $('.classTest').simplehide({
      showLink: '<a href="#">Versions...</a>'
    });

    $('.classTest').each((index, DOMElement) => {
      expect($(DOMElement).next().is('a, a *')).toBeTruthy();
      expect($(DOMElement).next().text()).toEqual('Versions...');
    });
  });

  test('Default with index initialization', function () {
    document.body.innerHTML = '<div id="testID">Test data</div>';

    $('#testID').simplehide({
      showLink: '<a href="#">Versions...</a>'
    });

    expect($('#testID').next().is('a, a *')).toBeTruthy();
    expect($('#testID').next().text()).toEqual('Versions...');
  });

  test('Default with index initialization with custom html tag', () => {
    document.body.innerHTML = '<customtag>Test data</customtag>';

    $('customtag').simplehide({
      showLink: '<a href="#">Versions...</a>'
    });

    expect($('customtag').next().is('a, a *')).toBeTruthy();
    expect($('customtag').next().text()).toEqual('Versions...');
  });
});
