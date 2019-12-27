import { NexusFactory } from "@ideaportriga/nexus-factory";
import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";

const ContactsList = ({ accountName }) => {
  const n19Helper = NexusFactory("contacts");

  const initialState = n19Helper.getRecordSet();
  const [contacts, setContacts] = useState(initialState);

  let id = 0;

  // subscribe to account name
  useEffect(() => {
    if (accountName) {
      const currentContacts = n19Helper.getRecordSet();
      setContacts(currentContacts);
    }
    else
      setContacts([])
  }, [accountName, n19Helper]);

  return (
    <div>
      <Typography variant="h6" id="tableTitle">
        {n19Helper.appletName}
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Job Title</TableCell>
            <TableCell>Email Address</TableCell>
            <TableCell align="right">Created</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.map(row => (
            <TableRow key={id++}>
              <TableCell component="th" scope="row">
                {row["Id"]}
              </TableCell>
              <TableCell>{row["First Name"]}</TableCell>
              <TableCell>{row["Last Name"]}</TableCell>
              <TableCell>{row["Job Title"]}</TableCell>
              <TableCell>{row["Email Address"]}</TableCell>
              <TableCell align="right">{row["Created"]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ContactsList;
