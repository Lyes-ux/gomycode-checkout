INSERT INTO Customer (customer_id,customer_name,customer_tel)
value ('CO1','ALI',71321009);

INSERT INTO Customer (customer_id,customer_name,customer_tel)
value ('CO2','ASMA',77345823);

INSERT INTO Product (product_id,product_name,price)
value ('PO2','samsung galaxy s20',3299);

INSERT INTO Product (product_id,product_name,price)
value ('PO2','ASUS notbook',4599);

insert into Orders(
    customer_id,
    product_id,
    quantity,
    total_amount
)
value(
    'CO1',
    'PO2',
    2,
    9198
)
value(
    'CO2',
    'PO1',
    1,
    3299
)