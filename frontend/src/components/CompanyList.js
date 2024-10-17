import Phone from './Phone.js'
import NewCompany from './NewCompany.js'
import Company from './company.js'

function CompanyList(props) {
  const { contact, company, setCompany } = props

  return (
    <div className='phone-list'>
      <NewCompany contact={contact} company={company} setCompany={setCompany} />

      <table onClick={(e) => e.stopPropagation()}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {company.map((item) => {
            return (
              <Company
                key={item.id}
                company={item}
                setCompanies={setCompany}
                companies={company}
                contact={contact}
              />
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default CompanyList
