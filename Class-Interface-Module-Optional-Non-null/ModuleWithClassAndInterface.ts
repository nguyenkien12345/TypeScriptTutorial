import {showInfo} from './interfaceForClass'
import {Invoice, Payment} from './classImplementInterface'

// Vì Invoice, Payment đều implement thằng showInfo nên ta hoàn toàn có thể khởi tạo kiểu dữ liệu showInfo bằng mội đối tượng mới là Invoice/Payment
const documentation1: showInfo = new Payment('Trung Kien', 'IT', 50000)
const documentation2: showInfo = new Invoice('Phong My', 'Trung Kien', 50000)

const allDocumentation: showInfo[] = []
allDocumentation.push(documentation1, documentation2)
console.log(allDocumentation)