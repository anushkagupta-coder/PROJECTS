//I AM MAKING A CALCULATOR USING JAVA GUI;
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class Calculator implements ActionListener {
    JFrame frame;
    Jtextfeild textfeild;
    JButton[] numberButtons = new JButton[10];
    JButton[] functionButtons = new JButton[10];
    JButton addButton,subButton,mulButton,divButton;
    JButton decButton,equButton,delButton,clrButton,negButton;
    JPanel panel;

    Font myFont = new Font("Ink Free",Font.BOLD,30);

    double num1=0;num2=0,result=0;
    char operator;

    Calculator(){
        frame = new JFrame("CALCULATOR");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setsize(420,550);
        frame.setLayout(null);

        textfield=new JTextField();
        textfield.setBounds(50,25,300,50);
        textfield.setFont(myFont);
        textfield.setEditable(false);

        addButton=new JButton("+");
        subButton=new JButton("-");
        mulButton=new JButton("*");
        divButton=new JButton("/");
        decButton=new JButton(".");
        equButton=new JButton("=");
        delButton=new JButton("DELETE");
        clrButton=new JButton("CLEAR");
        negButton=new JButton("(-)");
        
        functionButtons[0]=addButtons;
        functionButtons[1]=subButtons;
        functionButtons[2]=mulButtons;
        functionButtons[3]=divButtons;
        functionButtons[4]=decButtons;
        functionButtons[5]=equButtons;
        functionButtons[6]=delButtons;
        functionButtons[7]=clrButtons;
        functionButtons[8]=negButtons;

        for(int i=0;i<9;i++){
            functionButtons[i].addActionListener(this);
            functionButtons[i].setfont(myFont);
            functionButtons[i].setFocusable(false);
        }

        negButton.setBounds(50,430,100,50);
        delButton.setBounds(150,430,100,50);
        clrButton.setBounds(250,430,100,50);

        panel


    }
}
