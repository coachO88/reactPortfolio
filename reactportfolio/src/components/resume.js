import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Me from '../me.jpg'; 
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import References from './references';

class Resume extends Component{
    render(){
        return(
           <div>
               <Grid>
                   <Cell col={4}>
                       <div style={{textAlign:'center'}}>
                           <img
                            src={Me}
                            alt="avatar"
                            style={{height:"200px"}}
                           />
                       </div>

                       <h2 style={{paddingTop: '2em'}}>Orlando Rangel</h2>
                       <h4 style={{color:'grey'}}>Full Stack Developer</h4>
                       <hr style={{borderTop: '3px solid #833fb2', width:'50%'}}/>
                       <p>Computer Engineer/Full Stack Developer looking to find employement in related career fields.
                           Proven ability to navigate multitasking in fast pac, deadline oriented
                           position.  Highly adaptable and able to manage multiple tasks without 
                           sacrificing quality.  A self-motivated individual with problem solving skills
                           seeking to utilize experience, strong interpersonal skills, and
                           exceptional work ethic in an organization that values dedication and result.  Bilingual-Spanish.
                       </p>
                       <hr style={{borderTop: '3px solid #833fb2', width:'50%'}}/>
                       <h5>Address</h5>
                       <p>1432 Coyote Dr. Corona, CA. 92882</p>
                       <h5>Phone</h5>
                       <p>(951) 833-1575</p>
                       <h5>Email Address</h5>
                       <p>rangel52088@gmail.com</p>
                       <hr style={{borderTop: '3px solid #833fb2', width:'50%'}}/>
                       <h5>Key Skills</h5>
                       <p>Communication</p>
                       <p>Self-Motivated</p>
                       <p>Time Management</p>
                       <p>Team Player</p>
                       <p>Leadership</p>
                       <p>Technical Analysis</p>
                       <p>Document Organization</p>
                       <p>Spoken Language: Spanish (Fluent)</p>
                   </Cell>
                   <Cell className= "resume-right-col" col={8}>
                       <h2>Education</h2>

                       <Education
                       startYear={2006}
                       endYear={2015}
                       schoolName="California State University, San Bernardino"
                       schoolDescription="Bachelor of Science/ Computer Engineering"
                       />

                       <Education
                       startYear={2019}
                       endYear={2019}
                       schoolName="University Of California, Riverside"
                       schoolDescription="Full Stack Developer Certification"
                       />

                       <hr style={{borderTop: '3px solid #e22947'}}/>

                       <h2>Experience</h2>

                       <Experience
                       title="Write Up Coordinator"
                       name="Fabtex Inc."
                       location="Orange, CA"
                       startYear={2015}
                       endYear= "Present"
                       jobDescription="Responsible for analyzing measures sheets and photographs from 
                       customer and properties, inm order to determine accurate widths
                       and lengths of the drapery window coverings. Assited in developing new methods
                       of transposing information from measure sheets into excel worksheet, and taking proper deductions."
                       />

                       <Experience
                       title="Lead Installer"
                       name="AAA Installations"
                       location="Eastvale, CA"
                       startYear={2007}
                       endYear= {2015}
                       jobDescription="Personally installed and directed work crews for commercial drapery/blind
                       installation projects throughout the United States. Provided customer service and met deadlines
                       in fast-paced enviorment.  Improved and developed more efficient and productive methods of installations."
                       />

                       <Experience
                       title="Backroom Team Member"
                       name="Target"
                       location="Norco, CA"
                       startYear={2010}
                       endYear= {2014}
                       jobDescription="Worked in a team atmosphere in order to stock products and assure customer
                       satisfaction and corporate compliance.  Developed knowledge with regard to product placement 
                       for increased store sales."
                       />

                       <Experience
                       title="Shift Supervisor"
                       name="Kentucky Fried Chicken"
                       location="Corona, CA"
                       startYear={2006}
                       endYear= {2010}
                       jobDescription="Supervised work crews to ensure satisfactory customer service, including
                       drive-thru efficiency and product delivery.  Attended management meetings and implemented strategies
                       for controlling labor costs and promoting customer satisfaction."
                       />

                       <hr style={{borderTop: '3px solid #e22947'}}/>

                       <h2>Skills</h2>

                       <Skills
                       skills="Javascript"
                       progress={80}
                       />

                       <Skills
                       skills="HTML/CSS"
                       progress={70}
                       />

                       <Skills
                       skills="NodeJS"
                       progress={65}
                       />

                       <Skills
                       skills="Express"
                       progress={50}
                       />

                       <Skills
                       skills="mySql/MongoDB/Mongoose"
                       progress={75}
                       />

                       <Skills
                       skills="React"
                       progress={65}
                       />

                       <hr style={{borderTop: '3px solid #e22947'}}/>

                       <h2>References</h2>

                       <References
                       name="Edward Contreras"
                       occupation="Special Investigator"
                       company="U.S. State Department"
                       address="P.O. Box 19091"
                       cityAndState="Anaheim, CA. 92817"
                       number="(714) 412-4769"
                       email="1035econtreras@gmail.com"

                       name2="Derek Wainstein"
                       occupation2="Write Up Manager"
                       company2="Fabtex Inc."
                       address2="1202 W. Struck Ave."
                       cityAndState2="Orange, CA. 92867"
                       number2="(714) 222-6232"
                       email2="derek.wainstein@fabtex.com"

                       name3="Howard Crone"
                       occupation3="Company Owner"
                       company3="AAA Installations"
                       address3="7416 Morning Hills Dr."
                       cityAndState3="Eastvale, CA. 92880"
                       number3="(714) 655-3382"
                       email3="howardcrone11@gmail.com"
                       />


                   </Cell>
               </Grid>
           </div>
        )
    }
}

export default Resume;