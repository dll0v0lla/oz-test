// 필요한 DOM 요소들을 가져오기
const dataTable = document.getElementById('data-table');
const searchButton = document.getElementById('search-button');
const inputText = document.getElementById('product_name_input');
const selectAllButton = document.getElementById('select-all-button');
const selectDelButton = document.getElementById('select-del-button');
const clothesTypeButton = document.getElementById('clothes_type');
const clothesGender = document.getElementById('clothes_gender');

// 미리 정의된 데이터 배열
const data = [
    { category: "상의", brand: 'Supreme', product: '슈프림 박스로고 후드티', price: '390,000', gender: '남성', id: 0 },
    { category: "하의", brand: 'DIESEL', product: '디젤 트랙 팬츠', price: '188,000', gender: '여성', id: 1 },
    { category: "신발", brand: 'Nike', product: '에어포스 1', price: '137,000', gender: '공용', id: 2 },
    { category: "패션잡화", brand: 'Music&Goods', product: '빵빵이 키링', price: '29,000', gender: '공용', id: 3 },
    // ...
];

let filteredData = data; // 필터링된 데이터를 저장하는 변수

// 테이블에 데이터를 삽입하는 함수
function insertTable(data) {
    dataTable.innerHTML = ''; // 테이블 초기화
    data.forEach((item) => {
        const row = dataTable.insertRow(); // 새로운 행 삽입
        // 각 셀에 데이터 삽입
        row.insertCell(0).innerHTML = `<input class="form-check-input" type="checkbox" id='${item.id}' name="check">`;
        row.insertCell(1).innerText = item.category;
        row.insertCell(2).innerText = item.brand;
        row.insertCell(3).innerText = item.product;
        row.insertCell(4).innerText = item.price;
        row.insertCell(5).innerText = item.gender;
    });
}
insertTable(data); // 초기 데이터로 테이블 채우기

// 데이터 필터링 함수
function filterData() {
    let filteredData = data.filter(item => (clothesTypeButton.value === '전체' || item.category === clothesTypeButton.value) &&
                                            (clothesGender.value === '전체' || item.gender === clothesGender.value));
    if (inputText.value.trim() !== '') {
        const searchText = inputText.value.trim().toLowerCase();
        filteredData = filteredData.filter(item => item.product.toLowerCase().includes(searchText) || 
                                                   item.brand.toLowerCase().includes(searchText));
    }
    return filteredData;
}

// 옷 종류 선택 셀렉트 박스 이벤트 리스너
clothesTypeButton.addEventListener('change', function () {
    insertTable(filterData()); // 선택한 옷 종류에 따라 테이블 필터링 및 삽입
});

// 성별 선택 셀렉트 박스 이벤트 리스너
clothesGender.addEventListener('change', function () {
    insertTable(filterData()); // 선택한 성별에 따라 테이블 필터링 및 삽입
});

// 검색 버튼 클릭 이벤트 리스너
searchButton.addEventListener('click', function (e) {
    e.preventDefault(); // 기본 이벤트 동작 방지
    insertTable(filterData()); // 검색어에 따라 테이블 필터링 및 삽입
});

// 전체 선택 버튼 클릭 이벤트 리스너
selectAllButton.addEventListener('click', function (e) {
    e.preventDefault(); // 기본 이벤트 동작 방지
    const checkboxes = document.querySelectorAll('.form-check-input');
    checkboxes.forEach(checkbox => checkbox.checked = true); // 모든 체크박스 선택 처리
});

// 선택 삭제 버튼 클릭 이벤트 리스너
selectDelButton.addEventListener('click', function (e) {
    e.preventDefault(); // 기본 이벤트 동작 방지
    const checkboxes = document.querySelectorAll('.form-check-input:checked');
    checkboxes.forEach(checkbox => {
        checkbox.parentElement.parentElement.remove(); // 선택된 행 삭제
        filteredData = filteredData.filter(item => item.id !== parseInt(checkbox.id)); // 필터링된 데이터에서 삭제
    });
});
