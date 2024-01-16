import React,{useState} from 'react'
// import "../../Components/Style/style.css";
import Card from "react-bootstrap/Card";
import Adminsidebar from "../../Components/Admin/Adminsidebar";
import Adminnavbar from "../../Components/Admin/Adminnavbar";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Addeditstudentlayout = () => {

  const [showStudentCard, setShowStudentCard] = useState(false);
  const [showParentCard, setShowParentCard] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const handleAddEditStudentClick = () => {
    setShowStudentCard(true);
    setShowParentCard(false);
    setActiveButton('Add/Edit Student');
  };

  const handleParentDetailsClick = () => {
    setShowStudentCard(false);
    setShowParentCard(true);
    setActiveButton('Parent Details');
  };
  const cardDatastudent = [
    {
      title: 'Student Details',
      label: "Name as per 12th gradesheet:",type:'text',
      additionalFields: [
        { label: "Enrollment number:",type:'number'  },
        { label: " Application number:",type:'number' },
        { label: " Academic year:",type:'number' },
        { label: " Program/Branch:",type:'text' },
        { label: "Date of joining:",type:'date' },
        { label: " Date of birth:",type:'date' },
        { label: " Gender:",type:'text' },
        { label: " Present mobile number:",type:'number' },
        { label: " Previous mobile number:",type:'number' },
        { label: " Email id:",type:'mail' },
        { label: " Blood group:",type:'text' },
        { label: " Category of admission:",type:'text' },
        { label: " Nationality:",type:'text'},
        { label: "Religion:",type:'text' },
        
      ],
    },
    { title: '', label: ' Social category:', size:6,
    additionalFields: [
        { label: "Mother tongue:",type:'text' },
        { label: "Maritial status:",type:'text' },
      { label: 'Domicile status:',type:'text' },
      { label: 'Adhar card:',type:'number' },
      { label: 'Name as on Adhar card:',type:'text' },
      { label: 'Official correspondance email:',type:'mail' },
      { label: "Official correspondance number:",type:'number' },
      { label: "Emergency contact number:",type:'number' },
      { label: "Social media account:",type:'text' },
      { label: "Number of credits earned:",type:'number' },
    ],
  
  },
  ];
  const cardDataparent = [
    {
      title: "Parent Details",
      label: "Father's Name:",type:'text',
      additionalFields: [
        { label: "Father's contact number:",type:'number' },
        { label: "Father's occupation:",type:'text'},
        { label: " Father's email id:",type:'mail'},
        { label: " Mother's Name:",type:'text' },
        { label: " Mother's contact number:",type:'number' },
        { label: "Mother's occupation:",type:'text' },
        { label: " Mother's email id:",type:'mail' },
        { label: " Guardian Name:",type:'text' },
        { label: " Guardian contact number:",type:'number' },
        { label: " Guardian occupation:",type:'text' },
        { label: " Guardian email id:" ,type:'mail'},
        { label: " Category of admission:" ,type:'text'},
      ],
    },
    {
      title: "Parent Bank Details",
      label: " Maritial status:",
      size: 6,
      additionalFields: [
        { label: " Bank Account number:",type:'number' },
        { label: " Account holder name:",type:'text' },
        { label: " IFSC code:",type:'text' },
        { label: " Branch:" ,type:'text'},
        { label: " PAN card number:",type:'text' },
      ],
    },
  ];


  return (
    <div className='container'>
       <Adminsidebar />
      <Adminnavbar />
      <div >
      <Button
        className={`btn-blue w-60 h-10 ${activeButton === 'Add/Edit Student' ? 'active' : ''}`}
        onClick={handleAddEditStudentClick}
      >Add/Edit Student</Button>
      <Button
        className={`btnparentdetail ${activeButton === 'Parent Details' ? 'active' : ''}`}
        onClick={handleParentDetailsClick}
      >Parent Details</Button>
      </div>
      

      {showStudentCard && (
       <Card className='w-93rem fixed mt-280 ml-80 h-50rem overflow-y-auto max-h-80vh'>
       <Row xs={1} md={2} className="g-4">
         {cardDatastudent.map((card, idx) => (
           <Col key={idx} xs={card.size} md={card.size}>
             <Card className='ml-6 fixed mt-20 w-43rem'border='light'>
              
               <Card.Body>
                 <Card.Title>{card.title}</Card.Title>
                 <Form className='mt-30 mr-0 static text-left h-1060 text-20'>
                   <Form.Group as={Row} className="mb-3">
                     <Form.Label column sm="4">
                       {card.label}
                     </Form.Label>
                     <Col sm="8">
                       <Form.Control type={card.type} placeholder={card.placeholder} />
                     </Col>
                   </Form.Group>
                   {idx === 0 && (
                     <>
                       {card.additionalFields.map((field, fieldIdx) => (
                         <Form.Group as={Row} key={fieldIdx} className="mb-3">
                           <Form.Label column sm="4">
                             {field.label}
                           </Form.Label>
                           <Col sm="8">
                             <Form.Control type={field.type} placeholder={field.placeholder} />
                           </Col>
                         </Form.Group>
                       ))}
                     </>
                   )}
                   {idx === 1 && (
                     <>
                       {card.additionalFields.map((field, fieldIdx) => (
                         <Form.Group as={Row} key={fieldIdx} className="mb-3">
                           <Form.Label column sm="4">
                             {field.label}
                           </Form.Label>
                           <Col sm="8">
                             <Form.Control type={field.type} placeholder={field.placeholder} />
                           </Col>
                         </Form.Group>
                       ))}
                     </>
                   )}
                 </Form>
               </Card.Body>
             </Card>
           </Col>
         ))}
       </Row>
       <Button className="absolute bg-blue-500 rounded-md w-100 h-40 right-450 bottom-neg-300 text-white text-22 pl-3 pt-6">Save</Button>
         <Button className="absolute bg-blue-500 rounded-md w-100 h-40 right-250 bottom-neg-300 text-white text-22 pl-3 pt-6">Edit</Button>
       </Card>
      )}

      {showParentCard && (
         <Card className="w-93rem fixed mt-280 ml-80 h-50rem overflow-y-auto max-h-80vh">
         <Row xs={1} md={2} className="g-4">
           {cardDataparent.map((card, idx) => (
             <Col key={idx} xs={card.size} md={card.size}>
               <Card className="ml-6 fixed mt-20 w-43rem" border="light">
                 {/* <Card.Img variant="top" src={card.image} alt={`Card ${idx + 1}`} /> */}
                 <Card.Body>
                   <Card.Title>{card.title}</Card.Title>
                   <Form className="mt-30 mr-0 static text-left h-920 text-20">
                     <Form.Group as={Row} className="mb-3">
                       <Form.Label column sm="4">
                         {card.label}
                       </Form.Label>
                       <Col sm="8">
                         <Form.Control
                           type={card.type}
                           placeholder={card.placeholder}
                         />
                       </Col>
                     </Form.Group>
                     {idx === 0 && (
                       <>
                         {card.additionalFields.map((field, fieldIdx) => (
                           <Form.Group as={Row} key={fieldIdx} className="mb-3">
                             <Form.Label column sm="4">
                               {field.label}
                             </Form.Label>
                             <Col sm="8">
                               <Form.Control
                                 type={field.type}
                                 placeholder={field.placeholder}
                               />
                             </Col>
                           </Form.Group>
                         ))}
                       </>
                     )}
                     {idx === 1 && (
                       <>
                         {card.additionalFields.map((field, fieldIdx) => (
                           <Form.Group as={Row} key={fieldIdx} className="mb-3">
                             <Form.Label column sm="4">
                               {field.label}
                             </Form.Label>
                             <Col sm="8">
                               <Form.Control
                                 type={field.type}
                                 placeholder={field.placeholder}
                               />
                             </Col>
                           </Form.Group>
                         ))}
                       </>
                     )}
                   </Form>
                 </Card.Body>
               </Card>
             </Col>
           ))}
         </Row>
         <Button className="absolute bg-blue-500 rounded-md w-100 h-40 right-450 bottom-100 text-white text-22 pl-3 pt-6">Save</Button>
         <Button className="absolute bg-blue-500 rounded-md w-100 h-40 right-250 bottom-100 text-white text-22 pl-3 pt-6">Edit</Button>
       </Card>
      )}
    </div>
  );
};
   

export default Addeditstudentlayout
