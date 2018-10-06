### Institute CRUD App

#### Technologies:
<ul>
    <li>Web Api 2</li>
    <li>Angularjs 1.x</li>
    <li>Entity Framewrok 5.x</li>
    <li>Database First</li>
    <li>Bootstrap</li>    
</ul>

Clone this repository first

    git clone https://github.com/sabbiryan/institute.ng.webapi.git
    
This reposiotry includes 

    Source
        DB
        VirtualTrainees
        
Step 1: DB, folder include just the database script with some dummy data. Create a database named "VirtualTrainees" first and run this script.

Step 2: VirtualTrainees, folder is the main source code of this application. Inside of VirtualTrainees folder you will find a VirtualTrainees.sln file. Double click to open this project using visual studio. After open this project edit on web.config file on following section.

        <connectionStrings>
                <add name="VirtualTraineesEntities" connectionString="metadata=res://*/Models.VirtualTraineesModel.csdl|res://*/Models.VirtualTraineesModel.ssdl|res://*/Models.VirtualTraineesModel.msl;provider=System.Data.SqlClient;provider connection string=&quot;
                data source=.\SQLSERVER2012;initial catalog=VirtualTrainees;integrated security=True;MultipleActiveResultSets=True;App=EntityFramework&quot;" 
                providerName="System.Data.EntityClient" />
        </connectionStrings>
        

Step 3: Change "source=.\SQLSERVER2012" to with your database source server. Build, Run, Enjoy!
