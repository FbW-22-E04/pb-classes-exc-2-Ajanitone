# Erweitern von Klassen

#### 1. Mitarbeiter-Klasse

- Erstelle eine Klasse `Employee`, die akzeptiert:

  - `id` des Mitarbeiters als Zahl
  - `firstName` des Mitarbeiters als String
  - `lastName` des Angestellten als String
  - `taxId` als Zahl
  - `salary` als Zahl

- Die Klasse `Employee` sollte eine Methode `generatePaySlip` haben, die zurückgibt:

```
       Employee ID: id
       Name: firstName lastName
       Tax ID: taxId
       Pay: monthlySalary --> will need to be calculated based off of salary
```

#### 2. Manager Klasse

- Erstelle eine `Manager` Klasse, die die `Employee` Klasse erweitert

- Die `Manager`-Klasse muss um ein Array `managedEmployees` erweitert werden.

- Die Klasse `Manager` benötigt zwei Methoden:
  - `addManagedEmployee`, um einen verwalteten Mitarbeiter zum Array `managedEmployees` hinzuzufügen
  - `removeManagedEmployee`, um einen verwalteten Mitarbeiter aus dem Array `managedEmployees` zu entfernen
